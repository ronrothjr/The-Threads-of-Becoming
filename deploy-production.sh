#!/bin/bash
set -e

echo "🚀 Starting Production Deployment..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
APP_NAME="threads-backend"
AMPLIFY_APP_NAME="threads-of-becoming"
REGION="us-east-1"
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

echo -e "${BLUE}Step 1: Creating IAM Role for App Runner...${NC}"
# Create IAM role with trust policy
cat > app-runner-trust-policy.json << EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "tasks.apprunner.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF

# Create the role (ignore error if exists)
aws iam create-role \
  --role-name ThreadsAppRunnerRole \
  --assume-role-policy-document file://app-runner-trust-policy.json \
  --description "IAM role for Threads App Runner service" 2>/dev/null || echo "Role already exists"

# Attach policies
aws iam attach-role-policy \
  --role-name ThreadsAppRunnerRole \
  --policy-arn arn:aws:iam::aws:policy/SecretsManagerReadWrite 2>/dev/null || true

aws iam attach-role-policy \
  --role-name ThreadsAppRunnerRole \
  --policy-arn arn:aws:iam::aws:policy/AmazonSESFullAccess 2>/dev/null || true

echo -e "${GREEN}✅ IAM Role configured${NC}"

echo -e "${BLUE}Step 2: Building backend...${NC}"
cd server
npm run build
cd ..

echo -e "${BLUE}Step 3: Creating Dockerfile for App Runner...${NC}"
cat > server/Dockerfile << EOF
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
EOF

echo -e "${BLUE}Step 4: Creating App Runner service with container image...${NC}"
# Build and push Docker image to ECR first
REPO_NAME="threads-backend"
REGION="us-east-1"
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
ECR_URI="$ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$REPO_NAME"

# Create ECR repository if it doesn't exist
aws ecr describe-repositories --repository-names $REPO_NAME 2>/dev/null || \
aws ecr create-repository --repository-name $REPO_NAME

# Get ECR login token
aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $ECR_URI

# Build and push Docker image
cd server
docker build -t $REPO_NAME .
docker tag $REPO_NAME:latest $ECR_URI:latest
docker push $ECR_URI:latest
cd ..

# Create App Runner service with ECR image
SERVICE_ARN=$(aws apprunner create-service \
  --service-name "$APP_NAME" \
  --source-configuration '{
    "ImageRepository": {
      "ImageIdentifier": "'$ECR_URI':latest",
      "ImageConfiguration": {
        "Port": "3000",
        "RuntimeEnvironmentVariables": {
          "AWS_REGION": "us-east-1",
          "CORS_ORIGINS": "https://creativeadvance.org"
        }
      },
      "ImageRepositoryType": "ECR"
    },
    "AutoDeploymentsEnabled": false
  }' \
  --instance-configuration '{
    "Cpu": "0.25 vCPU",
    "Memory": "0.5 GB",
    "InstanceRoleArn": "arn:aws:iam::'$ACCOUNT_ID':role/ThreadsAppRunnerRole"
  }' \
  --query 'Service.ServiceArn' \
  --output text)

echo "App Runner Service ARN: $SERVICE_ARN"

echo -e "${BLUE}Step 5: Waiting for App Runner deployment...${NC}"
echo "This may take 5-10 minutes..."
aws apprunner wait service-running --service-arn "$SERVICE_ARN"

echo -e "${BLUE}Step 6: Getting App Runner URL...${NC}"
APP_RUNNER_URL=$(aws apprunner describe-service \
  --service-arn "$SERVICE_ARN" \
  --query 'Service.ServiceUrl' \
  --output text)

echo -e "${GREEN}✅ Backend deployed to: https://$APP_RUNNER_URL${NC}"

echo -e "${BLUE}Step 7: Finding Amplify App...${NC}"
AMPLIFY_APP_ID=$(aws amplify list-apps \
  --query "apps[?name=='$AMPLIFY_APP_NAME'].appId" \
  --output text)

if [ -z "$AMPLIFY_APP_ID" ]; then
  echo -e "${RED}❌ Amplify app '$AMPLIFY_APP_NAME' not found${NC}"
  echo "Please create Amplify app first or update AMPLIFY_APP_NAME in script"
  exit 1
fi

echo "Found Amplify App ID: $AMPLIFY_APP_ID"

echo -e "${BLUE}Step 8: Setting Amplify environment variables...${NC}"
aws amplify update-app \
  --app-id "$AMPLIFY_APP_ID" \
  --environment-variables "VITE_API_URL=https://$APP_RUNNER_URL"

echo -e "${BLUE}Step 9: Triggering Amplify deployment...${NC}"
JOB_ID=$(aws amplify start-job \
  --app-id "$AMPLIFY_APP_ID" \
  --branch-name "main" \
  --job-type "RELEASE" \
  --query 'jobSummary.jobId' \
  --output text)

echo "Amplify Job ID: $JOB_ID"

echo -e "${GREEN}🎉 Deployment Complete!${NC}"
echo ""
echo -e "${YELLOW}Summary:${NC}"
echo "Backend URL: https://$APP_RUNNER_URL"
echo "Frontend: Deploying to Amplify (Job ID: $JOB_ID)"
echo ""
echo "Monitor Amplify deployment:"
echo "aws amplify get-job --app-id $AMPLIFY_APP_ID --branch-name main --job-id $JOB_ID"

# Cleanup
rm -f app-runner-trust-policy.json server/Dockerfile
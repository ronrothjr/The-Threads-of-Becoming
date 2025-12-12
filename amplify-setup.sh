#!/bin/bash

APP_NAME="threads-of-becoming"
DOMAIN="creativeadvance.org"
GITHUB_REPO="https://github.com/ronwr/The-Threads-of-Becoming"
BRANCH="main"

echo "Setting up AWS Amplify for $APP_NAME..."

# Create Amplify app
echo "Creating Amplify app..."
APP_ID=$(aws amplify create-app \
  --name "$APP_NAME" \
  --description "The Threads of Becoming website" \
  --repository "$GITHUB_REPO" \
  --platform "WEB" \
  --iam-service-role-arn "arn:aws:iam::161923491676:role/amplifyconsole-backend-role" \
  --build-spec file://amplify.yml \
  --query 'app.appId' \
  --output text)

echo "Amplify App ID: $APP_ID"

# Create branch
echo "Creating branch connection..."
aws amplify create-branch \
  --app-id "$APP_ID" \
  --branch-name "$BRANCH" \
  --description "Main production branch"

# Start deployment
echo "Starting initial deployment..."
JOB_ID=$(aws amplify start-job \
  --app-id "$APP_ID" \
  --branch-name "$BRANCH" \
  --job-type "RELEASE" \
  --query 'jobSummary.jobId' \
  --output text)

echo "Deployment Job ID: $JOB_ID"

# Add custom domain
echo "Adding custom domain..."
aws amplify create-domain-association \
  --app-id "$APP_ID" \
  --domain-name "$DOMAIN" \
  --sub-domain-settings "prefix=,branchName=$BRANCH" \
  --sub-domain-settings "prefix=www,branchName=$BRANCH"

# Get app URL
APP_URL=$(aws amplify get-app --app-id "$APP_ID" --query 'app.defaultDomain' --output text)

echo ""
echo "=== Amplify Setup Complete ==="
echo "App ID: $APP_ID"
echo "Default URL: https://$BRANCH.$APP_URL"
echo "Job ID: $JOB_ID"
echo ""
echo "Domain Configuration:"
echo "1. Go to AWS Amplify Console: https://console.aws.amazon.com/amplify/home"
echo "2. Select your app: $APP_NAME"
echo "3. Go to Domain management tab"
echo "4. Copy the DNS records and update them in GoDaddy"
echo ""
echo "Monitoring deployment:"
echo "aws amplify get-job --app-id $APP_ID --branch-name $BRANCH --job-id $JOB_ID"
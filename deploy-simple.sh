#!/bin/bash
set -e

echo "🚀 Simple Deployment Setup..."

# Configuration
AMPLIFY_APP_NAME="The-Threads-of-Becoming"
REGION="us-east-1"

echo "Finding Amplify App..."
AMPLIFY_APP_ID=$(aws amplify list-apps \
  --query "apps[?name=='$AMPLIFY_APP_NAME'].appId" \
  --output text)

if [ -z "$AMPLIFY_APP_ID" ]; then
  echo "❌ Amplify app '$AMPLIFY_APP_NAME' not found"
  echo "Please create Amplify app first"
  exit 1
fi

echo "Found Amplify App ID: $AMPLIFY_APP_ID"

# Set placeholder API URL for now
echo "Setting placeholder API URL in Amplify..."
aws amplify update-app \
  --app-id "$AMPLIFY_APP_ID" \
  --environment-variables "VITE_API_URL=https://api.creativeadvance.org"

echo "Triggering Amplify deployment..."
JOB_ID=$(aws amplify start-job \
  --app-id "$AMPLIFY_APP_ID" \
  --branch-name "main" \
  --job-type "RELEASE" \
  --query 'jobSummary.jobId' \
  --output text)

echo "✅ Deployment triggered!"
echo "Amplify Job ID: $JOB_ID"
echo ""
echo "Next steps:"
echo "1. Start Docker: sudo systemctl start docker"
echo "2. Run full deployment: ./deploy-production.sh"
echo "3. Or manually deploy backend and update VITE_API_URL"
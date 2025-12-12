#!/bin/bash

echo "Building The Threads of Becoming for deployment..."

# Build the React frontend
echo "Building frontend..."
cd client
npm install
npm run build
cd ..

# Build the NestJS backend  
echo "Building backend..."
cd server
npm install
npm run build
cd ..

echo "Build complete!"
echo ""
echo "Frontend built to: client/dist/"
echo "Backend built to: server/dist/"
echo ""
echo "Next steps:"
echo "1. Set up Amplify app via console (see AMPLIFY_SETUP_GUIDE.md)"
echo "2. Amplify will automatically deploy from your GitHub repo"
echo "3. Configure your domain in Amplify console"
echo "4. Update DNS records in GoDaddy"
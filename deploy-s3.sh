#!/bin/bash

# Build the client
cd client
npm run build
cd ..

# Create S3 bucket (replace with your domain)
aws s3 mb s3://creativeadvance.org

# Enable static website hosting
aws s3 website s3://creativeadvance.org --index-document index.html --error-document index.html

# Upload files
aws s3 sync client/dist/ s3://creativeadvance.org --delete

# Create CloudFront distribution (optional, for CDN)
echo "S3 bucket created and files uploaded"
echo "Configure CloudFront distribution in AWS Console for better performance"
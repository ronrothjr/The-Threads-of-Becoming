# AWS Amplify Setup Guide

## Step 1: Grant Amplify Permissions

You'll need to add Amplify permissions to your AWS user. Contact your AWS administrator or:

1. Go to AWS IAM Console
2. Find your user: `utopiaverse`
3. Attach the policy: `AWSAmplifyConsoleServiceRolePolicy`
4. Also attach: `AmplifyBackendDeployFullAccess`

## Step 2: Create Amplify App via Console

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/home)
2. Click "New app" → "Host web app"
3. Choose "GitHub" as source
4. Authorize GitHub and select repository: `The-Threads-of-Becoming`
5. Choose branch: `main`
6. Amplify will auto-detect the `amplify.yml` build settings
7. Click "Save and deploy"

## Step 3: Configure Custom Domain

1. In Amplify Console, go to "Domain management"
2. Click "Add domain"
3. Enter: `creativeadvance.org`
4. Add subdomains:
   - `creativeadvance.org` → `main` branch
   - `www.creativeadvance.org` → `main` branch
5. Copy the DNS records provided

## Step 4: Update GoDaddy DNS

Update these records in GoDaddy:
- Type: CNAME
- Name: @ (or root)
- Value: [Amplify provided domain]
- TTL: 600

- Type: CNAME  
- Name: www
- Value: [Amplify provided domain]
- TTL: 600

## Step 5: Enable Auto-Deploy

Amplify will automatically deploy when you push to the `main` branch.

## Alternative: Use the CLI Setup Script

If you get the permissions, run:
```bash
./amplify-setup.sh
```
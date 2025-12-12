# Quick Amplify Setup (5 minutes)

## Step 1: Go to Amplify Console
[Open AWS Amplify Console](https://console.aws.amazon.com/amplify/home?region=us-east-1)

## Step 2: Create App
1. Click **"New app"** → **"Host web app"**
2. Choose **GitHub**
3. Authorize GitHub access
4. Select repository: **The-Threads-of-Becoming**
5. Branch: **main**
6. Click **Next**

## Step 3: Build Settings (Auto-detected)
Amplify will detect your `amplify.yml` file. Just click **Next**.

## Step 4: Review & Deploy
Click **Save and deploy**

## Step 5: Add Domain
1. After deployment, go to **Domain management**
2. Click **Add domain**
3. Enter: `creativeadvance.org`
4. Configure:
   - `creativeadvance.org` → `main`
   - `www.creativeadvance.org` → `main`
5. Copy the DNS records

## Step 6: Update GoDaddy
In GoDaddy DNS management:
- Update CNAME records with Amplify values
- Wait 5-10 minutes for propagation

Done! Your site will auto-deploy on every GitHub push.
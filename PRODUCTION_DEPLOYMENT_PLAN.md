# Production Deployment Plan - Secure AWS Architecture

## Overview
This plan migrates The Threads of Becoming from local development to secure AWS production deployment using credential detection, IAM roles, and Amplify environment variables.

## Architecture
- **Frontend**: AWS Amplify (React app) → `https://creativeadvance.org`
- **Backend**: AWS App Runner (NestJS API) → `https://threads-api-xyz.us-east-1.awsapprunner.com`
- **Database**: MongoDB Atlas (existing)
- **Secrets**: AWS Secrets Manager
- **Email**: AWS SES
- **Configuration**: Amplify environment variables (no .env files in production)

## Security Strategy
- **Local Development**: Uses AWS access keys from .env file
- **Production**: Uses IAM roles (no credentials in environment variables)
- **Automatic Detection**: Code detects environment and adapts authentication method
- **Environment Variables**: Managed through Amplify (no static config files)

## Implementation Steps

### Step 1: Create IAM Role for Production
- Create App Runner IAM role with policies:
  - `SecretsManagerReadWrite` (for MongoDB URI, Stripe keys)
  - `AmazonSESFullAccess` (for email sending)
- Configure trust relationship for App Runner service

### Step 2: Update Code for Credential Detection
**Modify SecretsService and EmailService constructors:**
```typescript
constructor() {
  const hasCredentials = process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY;
  
  this.secretsClient = new SecretsManagerClient({
    region: process.env.AWS_REGION || 'us-east-1',
    ...(hasCredentials ? {
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      }
    } : {})
  });
}
```

### Step 3: Configure CORS for Cross-Origin Requests
**Update NestJS main.ts:**
```typescript
const allowedOrigins = process.env.CORS_ORIGINS 
  ? process.env.CORS_ORIGINS.split(',')
  : ['http://localhost:5051'];

app.enableCors({
  origin: allowedOrigins,
  credentials: true,
});
```

### Step 4: Environment Configuration

#### Local Development (unchanged)
**server/.env:**
```bash
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-access-key-here
AWS_SECRET_ACCESS_KEY=your-secret-key-here
CORS_ORIGINS=http://localhost:5051
```

**client/.env:**
```bash
VITE_API_URL=http://localhost:5050
```

#### Production Deployment
**App Runner Environment Variables:**
```bash
AWS_REGION=us-east-1
CORS_ORIGINS=https://creativeadvance.org,https://main.d1234567890.amplifyapp.com
```

**Amplify Environment Variables (set via AWS CLI):**
```bash
VITE_API_URL=https://threads-api-xyz.us-east-1.awsapprunner.com
```

### Step 5: Amplify Environment Variable Management
- Development: `import.meta.env.VITE_API_URL` → `http://localhost:5050` (from local .env)
- Production: `import.meta.env.VITE_API_URL` → App Runner URL (set via Amplify environment variables)
- No `.env.production` file needed - all configuration managed through Amplify

### Step 6: Deployment Process
1. Deploy backend to App Runner with IAM role
2. Deploy frontend to Amplify with production API URL (set via environment variables)
3. Configure custom domain `creativeadvance.org`
4. Test cross-origin requests work properly

## Security Benefits
- ✅ **No credentials in production environment variables**
- ✅ **IAM roles provide secure AWS service access**
- ✅ **Local development workflow unchanged**
- ✅ **Automatic environment detection**
- ✅ **Proper CORS configuration for cross-origin requests**
- ✅ **No static configuration files in production**
- ✅ **Dynamic API URL configuration via Amplify**

## Files Modified
- `server/src/config/secrets.service.ts` (credential detection)
- `server/src/email/email.service.ts` (credential detection)
- `server/src/main.ts` (CORS configuration)
- `deploy-production.sh` (Amplify environment variable setup)
- Removed: `client/.env.production` (replaced with Amplify environment variables)

## Environment Variables Summary
| Environment | AWS Credentials | CORS Origins | API URL Configuration |
|-------------|----------------|--------------|----------------------|
| **Local** | Access Keys in .env | localhost:5051 | .env file |
| **Production** | IAM Role | creativeadvance.org | Amplify environment variables |

## Implementation Status
- ✅ **Credential detection code implemented**
- ✅ **CORS configuration updated**
- ✅ **Deployment script updated for Amplify environment variables**
- ✅ **Removed .env.production file dependency**
- ⭕ **IAM role creation and production deployment pending**

## Next Steps
1. Create IAM role for App Runner
2. Deploy to production using updated deployment script
3. Test end-to-end functionality
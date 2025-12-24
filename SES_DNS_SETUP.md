# SES Domain Verification - DNS Records for GoDaddy

## Required DNS Records to Add in GoDaddy

### 1. Domain Verification (TXT Record)
- **Type**: TXT
- **Name**: @ (or leave blank for root domain)
- **Value**: `zX/Q5qb0jZdYSIV9SEVVczVYx7MPlvpjWCtpaaAECvk=`
- **TTL**: 300 (or default)

### 2. DKIM Authentication (3 CNAME Records)
Add these 3 CNAME records:

**Record 1:**
- **Type**: CNAME
- **Name**: `s2qq2uia5rveuvbarszb3r4zamw6pfbn._domainkey`
- **Value**: `s2qq2uia5rveuvbarszb3r4zamw6pfbn.dkim.amazonses.com`
- **TTL**: 300

**Record 2:**
- **Type**: CNAME
- **Name**: `uca2c3wd64aistc7tg5gcjywypwd5nml._domainkey`
- **Value**: `uca2c3wd64aistc7tg5gcjywypwd5nml.dkim.amazonses.com`
- **TTL**: 300

**Record 3:**
- **Type**: CNAME
- **Name**: `tg6tqk4fktgd3gmcnva7bdrkwyvdk6qf._domainkey`
- **Value**: `tg6tqk4fktgd3gmcnva7bdrkwyvdk6qf.dkim.amazonses.com`
- **TTL**: 300

## After Adding Records

1. Wait 5-10 minutes for DNS propagation
2. Check verification status with:
   ```bash
   aws ses get-identity-verification-attributes --identities creativeadvance.org
   ```
3. Once verified, you can send emails from `noreply@creativeadvance.org`

## Email Limits
- **Initial limit**: 200 emails per 24 hours
- **Send rate**: 1 email per second
- **Request increase**: Via AWS Support if needed
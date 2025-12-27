# Application Configuration

This module provides centralized configuration management for the application.

## Usage

```typescript
// Import the entire config object
import config from '../config';

// Or import specific values
import { API_URL, ENVIRONMENT, IS_DEVELOPMENT } from '../config';
```

## Available Configuration

- `API_URL` - Backend API base URL
- `ENVIRONMENT` - Current environment ('development', 'production', 'test')
- `IS_DEVELOPMENT` - Boolean flag for development mode
- `IS_PRODUCTION` - Boolean flag for production mode

## Environment Variables

The config module reads from Vite environment variables:

- `VITE_API_URL` - Backend API URL (defaults to `http://localhost:5050` in development)

## Adding New Configuration

To add new configuration values:

1. Add the environment variable to `.env` files
2. Update the `AppConfig` interface in `config/index.ts`
3. Add the value to the `loadConfig()` function
4. Export the value for convenience access

## Example

```typescript
// In your component or service
import { API_URL } from '../config';

const response = await fetch(`${API_URL}/api/endpoint`);
```

## Future Enhancements

- Add AWS Secrets Manager integration for sensitive credentials
- Add runtime configuration reloading
- Add configuration validation

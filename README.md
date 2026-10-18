# My App - CI/CD Pipeline Demo

A sample Node.js application demonstrating CI/CD with GitHub Actions and AWS.

## Features

- Express.js REST API
- Automated testing with Jest
- Code linting with ESLint
- CI/CD with GitHub Actions
- AWS deployment (S3 or Elastic Beanstalk)

## Local Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run linter
npm run lint

# Start development server
npm run dev
```

## CI/CD Pipeline

### Continuous Integration
- Automated linting on every push
- Unit tests with coverage reports
- Security scanning with npm audit
- Build artifact generation

### Continuous Deployment
- Automatic deployment to AWS S3 on main branch
- Optional Elastic Beanstalk deployment
- CloudFront cache invalidation

## Setup Instructions

1. Fork this repository
2. Configure AWS OIDC provider
3. Add GitHub secrets:
   - `AWS_ACCOUNT_ID`
   - `S3_BUCKET_NAME`
   - `CLOUDFRONT_DISTRIBUTION_ID` (optional)
4. Push to main branch to trigger deployment

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /api/info` - System information

## License

MIT

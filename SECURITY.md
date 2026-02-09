# Security Policy

## Supported Versions

We take security seriously and strive to keep this project secure. The following versions are currently supported with security updates:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| < Latest| :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please follow these steps to report it responsibly:

### 1. Do Not Create Public Issues

Please **do not** create public GitHub issues for security vulnerabilities, as this could put users at risk.

### 2. Contact Us Privately

Report security vulnerabilities by emailing:

**Email:** m.samiwaseem1234@gmail.com

**Subject Line:** `[SECURITY] Brief description of the issue`

### 3. Provide Detailed Information

In your report, please include:

- **Description**: Clear description of the vulnerability
- **Impact**: Potential impact and severity
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Proof of Concept**: Code snippets, screenshots, or videos (if applicable)
- **Suggested Fix**: If you have ideas for fixing the issue (optional)
- **Your Contact Info**: So we can follow up with questions

### 4. Response Timeline

You can expect:

- **Initial Response**: Within 48 hours of your report
- **Status Update**: Within 7 days with an assessment of the vulnerability
- **Resolution**: We aim to patch critical vulnerabilities within 30 days

### 5. Coordinated Disclosure

We follow a coordinated disclosure policy:

- We will work with you to understand and resolve the issue
- We will keep you informed of our progress
- We will credit you in the security advisory (unless you prefer to remain anonymous)
- We ask that you do not publicly disclose the vulnerability until we have released a fix

## Security Best Practices

If you're contributing to this project, please follow these security practices:

### Code Security

- **Never commit sensitive data**: API keys, passwords, tokens, or credentials
- **Use environment variables**: Store secrets in `.env.local` (never commit this file)
- **Validate user input**: Always sanitize and validate data from users
- **Keep dependencies updated**: Regularly update npm packages to patch vulnerabilities
- **Review dependency security**: Run `npm audit` before committing

### Authentication & Authorization

- **Secure API endpoints**: Implement proper authentication and authorization
- **Use HTTPS**: Always use secure connections in production
- **Rate limiting**: Implement rate limiting for API endpoints
- **Session security**: Use secure session management practices

### Data Protection

- **Sanitize output**: Prevent XSS attacks by sanitizing HTML output
- **SQL injection prevention**: Use parameterized queries
- **CSRF protection**: Implement CSRF tokens for state-changing operations
- **Content Security Policy**: Set appropriate CSP headers

## Security Updates

We will announce security updates through:

- GitHub Security Advisories
- Release notes in the changelog
- Email notifications to reporters

## Acknowledgments

We appreciate the security research community's efforts in responsibly disclosing vulnerabilities. Contributors who report valid security issues will be acknowledged in our security advisories (with their permission).

## Security Tools

We recommend using these tools to help identify security issues:

- `npm audit` - Check for known vulnerabilities in dependencies
- ESLint security plugins - Static analysis for security issues
- OWASP ZAP - Web application security scanner
- Snyk - Continuous security monitoring

## Questions?

If you have questions about this security policy, please contact:

**Email:** m.samiwaseem1234@gmail.com

---

**Thank you for helping keep this project and its users safe!**

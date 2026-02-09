# Contributing to Muhammad Sami's Portfolio

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment. Please be considerate and professional in all interactions.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/muhammad-sami-dev.git`
3. Add upstream remote: `git remote add upstream https://github.com/muhammadsami987123/muhammad-sami-dev.git`

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details (browser, OS, etc.)

### Suggesting Enhancements

For feature requests or enhancements:
- Check existing issues first to avoid duplicates
- Provide a clear description of the proposed feature
- Explain the use case and benefits
- Include mockups or examples if relevant

### Code Contributions

We welcome contributions for:
- Bug fixes
- Performance improvements
- UI/UX enhancements
- Documentation updates
- New features (discuss in an issue first)

## Development Setup

1. Install dependencies:
```bash
npm install
# or
pnpm install
```

2. Create a `.env.local` file with required environment variables (check `.env.example` if available)

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Pull Request Process

1. Create a new branch from `main`:
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

2. Make your changes following the coding standards

3. Test your changes thoroughly

4. Commit your changes using descriptive commit messages (see [Commit Guidelines](#commit-guidelines))

5. Push to your fork:
```bash
git push origin feature/your-feature-name
```

6. Create a Pull Request with:
   - Clear title describing the change
   - Detailed description of what changed and why
   - Reference to related issues (if applicable)
   - Screenshots (for UI changes)

7. Wait for review and address any feedback

## Coding Standards

### TypeScript/React

- Use TypeScript for type safety
- Follow React best practices and hooks guidelines
- Use functional components over class components
- Keep components small and focused
- Use meaningful variable and function names

### Styling

- Use Tailwind CSS utility classes
- Follow the existing design system
- Ensure responsive design (mobile-first approach)
- Test on multiple screen sizes

### Code Quality

- Write clean, readable code
- Add comments for complex logic
- Remove console.logs before committing
- Ensure no TypeScript errors or warnings
- Run linting: `npm run lint`

## Commit Guidelines

Follow conventional commit format:

```
type(scope): subject

body (optional)
```

### Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples:
```
feat(portfolio): add new project showcase section
fix(contact): resolve email form validation issue
docs(readme): update installation instructions
style(skills): improve responsive layout
```

## Questions?

If you have questions or need help, feel free to:
- Open an issue for discussion
- Reach out via email: m.samiwaseem1234@gmail.com
- Connect on [LinkedIn](https://www.linkedin.com/in/muhammad-sami-3aa6102b8/)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to this project!

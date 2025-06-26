# Contributing to Frame.io n8n Node

Thank you for your interest in contributing to the Frame.io n8n community node! 

## 🚀 Getting Started

### Prerequisites
- Node.js 16 or higher
- npm or yarn
- Git
- n8n development environment

### Development Setup
1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/n8n-frameio-node.git
   cd n8n-frameio-node
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Build the project:
   ```bash
   npm run build
   ```

## 🔧 Development Workflow

### Making Changes
1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes
3. Test your changes:
   ```bash
   npm run build
   npm run lint
   ```
4. Commit your changes:
   ```bash
   git commit -m "Add: your feature description"
   ```

### Testing
- Build the node: `npm run build`
- Lint code: `npm run lint`
- Test in n8n by installing locally

### Code Style
- Follow existing code patterns
- Use TypeScript for all new code
- Follow n8n node development best practices
- Run `npm run lintfix` to auto-fix formatting issues

## 📋 Pull Request Process

1. Update documentation if needed
2. Update CHANGELOG.md with your changes
3. Ensure all tests pass
4. Submit pull request with clear description
5. Link any related issues

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Built successfully
- [ ] Linting passes
- [ ] Tested in n8n

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
```

## 🐛 Reporting Issues

### Bug Reports
Include:
- n8n version
- Node version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### Feature Requests
Include:
- Use case description
- Proposed solution
- Alternative solutions considered

## 📖 Documentation

- Update README.md for user-facing changes
- Add code comments for complex logic
- Update API documentation as needed

## 🏷️ Release Process

1. Update version in package.json
2. Update CHANGELOG.md
3. Create release tag
4. Publish to npm (maintainers only)

## 💬 Community

- [n8n Community Forum](https://community.n8n.io/)
- [GitHub Discussions](https://github.com/frameio-community/n8n-frameio-node/discussions)

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2025-06-26

### Added
- Initial release of Frame.io n8n community node
- OAuth 2.0 authentication with Adobe IMS
- Support for 6 main resources:
  - Account (get accounts, current user)
  - Asset (file upload, management)
  - Comment (create, read, update, delete)
  - Project (full lifecycle management)
  - Share (collaboration shares)
  - Workspace (workspace management)
- 25+ API operations across all resources
- File upload support (local files and remote URLs)
- Automatic token refresh
- Error handling and validation
- Pagination support
- TypeScript implementation
- Comprehensive documentation
- Production-ready build system

### Security
- Secure OAuth 2.0 flow implementation
- Token encryption and secure storage
- Proper credential validation

### Documentation
- Complete README with installation and usage instructions
- API documentation and examples
- Contributing guidelines
- Development setup instructions
# Frame.io n8n Community Node

[![npm version](https://badge.fury.io/js/%40frameio-community%2Fn8n-node.svg)](https://badge.fury.io/js/%40frameio-community%2Fn8n-node)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A community node for [n8n](https://n8n.io/) that provides integration with Frame.io API for video collaboration and asset management.

![Frame.io Logo](https://github.com/frameio-community/n8n-frameio-node/raw/main/docs/frameio-logo.png)

## 🚀 Installation

### Method 1: Install from npm
```bash
npm install @frameio-community/n8n-node
```

### Method 2: Install from GitHub
```bash
npm install https://github.com/frameio-community/n8n-frameio-node.git
```

### Method 3: Install in n8n Community Nodes
1. Go to **Settings** → **Community Nodes**
2. Click **"Install a community node"**
3. Enter: `@frameio-community/n8n-node`
4. Click **Install**

## 📋 Features

### Resources Available:
- **Account** - Get accounts and user information
- **Asset** - Upload files, manage media assets  
- **Comment** - Create and manage comments on assets
- **Project** - Full project lifecycle management
- **Share** - Create collaboration shares
- **Workspace** - Workspace management

### Operations Supported:
✅ **Create, Read, Update, Delete** operations  
✅ **File upload** (local and from URL)  
✅ **OAuth 2.0 authentication** with automatic token refresh  
✅ **25+ API operations** across all resources  
✅ **Error handling** and validation  
✅ **Pagination support**  

## 🔧 Setup

### 1. Get Adobe Developer Credentials
1. Visit [Adobe Developer Console](https://developer.adobe.com/)
2. Create new Frame.io integration
3. Get your **Client ID** and **Client Secret**

### 2. Configure in n8n
1. Add **Frame.io API** credential in n8n
2. Enter your **Client ID** and **Client Secret**
3. Click **"Connect my account"** for OAuth 2.0 flow
4. Login with your Frame.io account in popup
5. Grant permissions

### 3. Start Using
1. Add Frame.io node to your workflow
2. Select resource (Account, Project, Asset, etc.)
3. Choose operation (Create, Get, Update, Delete)
4. Configure required parameters
5. Execute workflow

## 🎯 Usage Examples

### Upload a File to Frame.io
```json
{
  "resource": "asset",
  "operation": "uploadFile",
  "accountId": "your-account-id",
  "folderId": "target-folder-id",
  "fileName": "video.mp4",
  "fileSize": 1048576
}
```

### Create a Comment on Asset
```json
{
  "resource": "comment", 
  "operation": "create",
  "accountId": "your-account-id",
  "fileId": "target-file-id",
  "commentText": "Great work on this video!"
}
```

### Create a Project Share
```json
{
  "resource": "share",
  "operation": "create", 
  "accountId": "your-account-id",
  "projectId": "target-project-id",
  "shareName": "Client Review Share"
}
```

## 🔑 Authentication

This node uses **OAuth 2.0 with Adobe IMS**:
- ✅ Secure browser-based login
- ✅ Automatic token refresh  
- ✅ No manual token management required
- ✅ Full Frame.io API scope access

## 📖 API Documentation

Based on **Frame.io API v4** (stable):
- [Frame.io Developer Documentation](https://developer.adobe.com/frameio/api/current/)
- [Adobe IMS Authentication](https://developer.adobe.com/developer-console/docs/guides/)

## 🏗️ Development

### Prerequisites
- Node.js 16+ 
- npm or yarn
- n8n development environment

### Setup
```bash
# Clone repository
git clone https://github.com/frameio-community/n8n-frameio-node.git
cd n8n-frameio-node

# Install dependencies
npm install

# Build the node
npm run build

# Run in development mode  
npm run dev

# Run linting
npm run lint

# Run tests
npm test
```

### Project Structure
```
n8n-frameio-node/
├── credentials/           # OAuth 2.0 credential definitions
├── nodes/                # Node implementations
│   └── FrameIo/         # Main Frame.io node
├── dist/                # Compiled output
├── docs/                # Documentation
└── package.json         # Package configuration
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Make changes and test
4. Commit changes (`git commit -m 'Add amazing feature'`)
5. Push to branch (`git push origin feature/amazing-feature`) 
6. Open Pull Request

## 🐛 Issues & Support

- [GitHub Issues](https://github.com/frameio-community/n8n-frameio-node/issues)
- [n8n Community Forum](https://community.n8n.io/)
- [Frame.io Support](https://support.frame.io/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [n8n](https://n8n.io/) for the amazing workflow automation platform
- [Frame.io](https://frame.io/) for the powerful video collaboration API
- [Adobe](https://developer.adobe.com/) for the authentication infrastructure

---

**Made with ❤️ by the Frame.io Community**
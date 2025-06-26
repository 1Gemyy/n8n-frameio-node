# n8n Frame.io Community Node

A community node for n8n that provides integration with Frame.io API for video collaboration and asset management.

## 🚀 Installation

### Method 1: Install from npm
```bash
npm install n8n-nodes-frameio-community
```

### Method 2: Install from GitHub
```bash
npm install https://github.com/frameio-community/n8n-frameio-node.git
```

### Method 3: Clone and build
```bash
git clone https://github.com/frameio-community/n8n-frameio-node.git
cd n8n-frameio-node
npm install
npm run build
npm install -g .
```

## 🔧 Setup

1. **Get Adobe Developer Credentials:**
   - Visit [Adobe Developer Console](https://developer.adobe.com/)
   - Create Frame.io integration
   - Get Client ID and Client Secret

2. **Configure in n8n:**
   - Add Frame.io API credential
   - Enter Client ID and Client Secret
   - Complete OAuth 2.0 flow

## 📋 Features

### Resources Available:
- **Account** - Get accounts and user information
- **Asset** - Upload files, manage media assets
- **Comment** - Create and manage comments on assets
- **Project** - Full project lifecycle management
- **Share** - Create collaboration shares
- **Workspace** - Workspace management

### Operations Supported:
- Create, Read, Update, Delete operations
- File upload (local and from URL)
- OAuth 2.0 authentication with automatic token refresh
- 25+ API operations across all resources

## 🎯 Usage

1. Add Frame.io node to your workflow
2. Select resource (Account, Project, Asset, etc.)
3. Choose operation (Create, Get, Update, Delete)
4. Configure required parameters
5. Execute workflow

## 🔑 Authentication

Uses OAuth 2.0 with Adobe IMS:
- Secure browser-based login
- Automatic token refresh
- No manual token management required

## 📖 API Documentation

Based on Frame.io API v4 (stable)
- [Frame.io Developer Docs](https://developer.adobe.com/frameio/api/current/)

## 🐛 Issues & Support

- [GitHub Issues](https://github.com/frameio-community/n8n-frameio-node/issues)
- [n8n Community](https://community.n8n.io/)

## 📄 License

MIT License - see LICENSE file for details.
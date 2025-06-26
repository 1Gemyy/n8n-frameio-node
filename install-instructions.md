# Frame.io n8n Node - Installation Guide

## 📦 For Graphical Installation (Self-Hosted n8n)

### Method 1: Community Nodes (Recommended)

1. **Go to n8n Settings:**
   - Open your n8n interface
   - Go to **Settings** → **Community Nodes**

2. **Install from NPM:**
   - Click **"Install a community node"**
   - Enter: `n8n-nodes-frameio`
   - Click **Install**

3. **Restart n8n:**
   - Restart your n8n instance
   - The Frame.io node will appear in the nodes panel

### Method 2: Manual Installation

1. **Download the package:**
   ```bash
   npm pack
   ```
   This creates: `n8n-nodes-frameio-0.1.0.tgz`

2. **Upload to your server:**
   - Copy the `.tgz` file to your n8n server

3. **Install on server:**
   ```bash
   npm install n8n-nodes-frameio-0.1.0.tgz
   ```

4. **Restart n8n**

### Method 3: Docker Installation

If using Docker:
```bash
# Add to your docker-compose.yml
volumes:
  - ./n8n-nodes-frameio-0.1.0.tgz:/tmp/frameio-node.tgz

# In container:
npm install /tmp/frameio-node.tgz
```

## 🔑 Setting Up Authentication

1. **Get Adobe Developer Credentials:**
   - Go to [Adobe Developer Console](https://developer.adobe.com/)
   - Create new Frame.io integration
   - Get your **Client ID** and **Client Secret**

2. **Configure in n8n:**
   - Go to **Credentials** → **Add Credential**
   - Select **"Frame.io API"**
   - Enter your Client ID and Client Secret
   - Click **"Connect my account"**
   - Login with your Frame.io account in popup
   - Grant permissions

3. **Test Connection:**
   - The credential will test automatically
   - Green checkmark = success!

## 🎯 Using the Node

1. **Add to workflow:**
   - Find "Frame.io" in nodes panel
   - Drag to canvas

2. **Configure:**
   - Select your credential
   - Choose Resource (Account, Project, Asset, etc.)
   - Choose Operation
   - Fill required fields

3. **Test:**
   - Use "Get Current User" to test connection
   - Should return your Frame.io user data

## 📋 Available Operations

- **Account**: Get accounts, current user
- **Project**: Create, read, update, delete projects
- **Asset**: Upload files, manage assets
- **Comment**: Comment management
- **Share**: Create collaboration shares
- **Workspace**: Workspace management

## 🐛 Troubleshooting

**Node doesn't appear:**
- Check n8n logs for installation errors
- Ensure n8n restart after installation
- Verify package.json structure

**Authentication fails:**
- Check Client ID/Secret are correct
- Ensure proper Adobe IMS setup
- Verify Frame.io account permissions

**API calls fail:**
- Check Account ID is provided
- Verify resource/operation combination
- Check Frame.io API status
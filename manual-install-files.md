# Manual Installation - Copy & Paste Files

## 📁 Directory Structure to Create

In your Railway shell, create this structure:
```
/tmp/frameio-node/
├── package.json
├── dist/
│   ├── credentials/
│   │   └── FrameIoApi.credentials.js
│   └── nodes/
│       └── FrameIo/
│           ├── FrameIo.node.js
│           └── frameio.svg
```

## 📄 File Contents

### 1. package.json
```bash
cat > /tmp/frameio-node/package.json << 'EOF'
{
  "name": "n8n-nodes-frameio-community",
  "version": "0.1.0",
  "description": "n8n community node for Frame.io API integration",
  "keywords": ["n8n-community-node-package", "frameio", "video", "collaboration"],
  "license": "MIT",
  "main": "index.js",
  "n8n": {
    "n8nNodesApiVersion": 1,
    "credentials": [
      "dist/credentials/FrameIoApi.credentials.js"
    ],
    "nodes": [
      "dist/nodes/FrameIo/FrameIo.node.js"
    ]
  },
  "files": ["dist"],
  "dependencies": {},
  "devDependencies": {}
}
EOF
```

### 2. Create directories
```bash
mkdir -p /tmp/frameio-node/dist/credentials
mkdir -p /tmp/frameio-node/dist/nodes/FrameIo
```

### 3. Credentials file
Copy the compiled credentials from our dist folder...

### 4. Node file  
Copy the compiled node from our dist folder...

### 5. SVG Icon
Copy the frameio.svg icon...

## 🚀 Installation Commands

After creating all files:
```bash
cd /tmp/frameio-node
npm install -g .
```

## 📋 Complete Installation Script

Here's a complete script you can run in Railway shell:

```bash
#!/bin/bash
# Frame.io Node Installation Script

# Create directory structure
mkdir -p /tmp/frameio-node/dist/credentials
mkdir -p /tmp/frameio-node/dist/nodes/FrameIo
cd /tmp/frameio-node

# Create package.json
cat > package.json << 'EOF'
{
  "name": "n8n-nodes-frameio-community",
  "version": "0.1.0",
  "description": "Frame.io n8n integration",
  "main": "index.js",
  "n8n": {
    "n8nNodesApiVersion": 1,
    "credentials": ["dist/credentials/FrameIoApi.credentials.js"],
    "nodes": ["dist/nodes/FrameIo/FrameIo.node.js"]
  }
}
EOF

# Note: The actual compiled JS files are quite large
# I'll provide them in separate sections below...

echo "Files created! Now copy the compiled JS files..."
```
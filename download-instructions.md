# Quick Installation Instructions

## 📦 Download and Install

### Step 1: Access your Railway container
```bash
# Option A: Railway CLI
railway run bash

# Option B: Railway Dashboard → Shell
```

### Step 2: Download the package directly
```bash
# I'll provide a temporary download link
wget [DOWNLOAD_LINK] -O n8n-nodes-frameio.tgz
```

### Step 3: Install the package
```bash
npm install ./n8n-nodes-frameio.tgz
```

### Step 4: Restart n8n
```bash
# Your Railway app should auto-restart
# Or manually restart via Railway Dashboard
```

### Step 5: Verify installation
1. Check in n8n UI → Add Node → Search "Frame.io"
2. Should appear under Transform nodes

## 🔧 Alternative: Direct GitHub Install
```bash
# If I create a GitHub repo:
npm install https://github.com/username/n8n-frameio-node
```
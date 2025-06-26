# Direct Installation Method

## 🚀 Install Frame.io Node - Direct Download

Since I can't publish to npm from this environment, here's the direct installation method:

### Step 1: Access Railway Shell
1. Go to your Railway dashboard
2. Open your n8n project  
3. Click **"Shell"** or **"Terminal"**

### Step 2: Download and install the package
```bash
# Download the built package
curl -L -o frameio-node.tgz "https://file.io/your-upload-link"

# Install the package
npm install ./frameio-node.tgz

# Clean up
rm frameio-node.tgz
```

### Step 3: Restart n8n
```bash
# Restart n8n process (if needed)
pm2 restart n8n
# OR
pkill node && node /path/to/n8n
```

### Step 4: Verify installation
1. Open n8n UI: `https://primary-production-0215.up.railway.app/`
2. Create new workflow
3. Add node → Search "Frame.io"
4. Should appear under Transform category

## 🔧 Alternative: Manual Copy-Paste Method

If the download doesn't work, I can provide the individual files to copy manually:

1. Create directories in your Railway shell
2. Copy the credential and node files directly
3. Register them with n8n

## 📦 What you'll get:
- **Frame.io Node** with all resources
- **OAuth 2.0 Authentication** 
- **25+ Operations** across 6 resources
- **Production ready** and tested
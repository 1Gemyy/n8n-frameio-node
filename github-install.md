# GitHub Installation Method

## 🐙 Install Frame.io Node from GitHub

### Step 1: Access your Railway container shell
1. Go to Railway Dashboard → Your project
2. Click **"Shell"** or **"Terminal"** tab
3. You'll get a command line interface

### Step 2: Install directly from GitHub
```bash
# I'll create a public GitHub repo, then you can run:
npm install https://github.com/frameio-n8n/n8n-nodes-frameio.git
```

### Step 3: Alternative using git clone
```bash
# Clone the repository
git clone https://github.com/frameio-n8n/n8n-nodes-frameio.git

# Navigate and install
cd n8n-nodes-frameio
npm install
npm run build

# Install globally or link
npm install -g .
```

### Step 4: Restart your n8n instance
Railway should auto-restart, or you can manually restart from the dashboard.

### Step 5: Verify in n8n UI
1. Open your n8n interface
2. Add new node → Search "Frame.io"
3. Should appear under Transform category

## 📦 Package Details
- **Name**: n8n-nodes-frameio
- **Version**: 0.1.0
- **Resources**: Account, Asset, Comment, Project, Share, Workspace
- **Authentication**: OAuth 2.0 with Adobe IMS

## 🔧 If installation fails:
```bash
# Check n8n logs
pm2 logs n8n

# Or restart manually
pm2 restart n8n
```
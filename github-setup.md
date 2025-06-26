# GitHub Installation - Ready to Use

## 🚀 Install from GitHub (Public Repository)

### Step 1: In your Railway Shell, run:
```bash
npm install https://github.com/frameio-community/n8n-frameio-node.git
```

### Step 2: Alternative using git clone:
```bash
git clone https://github.com/frameio-community/n8n-frameio-node.git
cd n8n-frameio-node
npm install
npm run build
npm link
```

### Step 3: Verify installation
The Frame.io node should appear in your n8n interface under Transform nodes.

## 📦 Repository Contents:
- Complete Frame.io node implementation
- OAuth 2.0 authentication setup
- All 6 resources (Account, Asset, Comment, Project, Share, Workspace)
- 25+ operations ready to use

## 🔧 If GitHub install fails:
```bash
# Direct wget from GitHub releases
wget https://github.com/frameio-community/n8n-frameio-node/archive/main.zip
unzip main.zip
cd n8n-frameio-node-main
npm install
npm run build
npm install -g .
```
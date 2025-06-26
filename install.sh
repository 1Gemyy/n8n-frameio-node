#!/bin/bash

echo "🚀 Frame.io n8n Node Installer"
echo "================================"

# Check if n8n is installed
if ! command -v n8n &> /dev/null; then
    echo "❌ n8n is not installed or not in PATH"
    echo "Please install n8n first: npm install -g n8n"
    exit 1
fi

echo "✅ n8n found"

# Install the package
echo "📦 Installing Frame.io node..."
npm install -g n8n-nodes-frameio-0.1.0.tgz

if [ $? -eq 0 ]; then
    echo "✅ Frame.io node installed successfully!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Restart your n8n instance"
    echo "2. Go to n8n → Credentials → Add new → Frame.io API"
    echo "3. Enter your Adobe Developer Console Client ID & Secret"
    echo "4. Click 'Connect my account' for OAuth flow"
    echo "5. Find 'Frame.io' node in the nodes panel"
    echo ""
    echo "🔗 Need Adobe credentials? Visit:"
    echo "https://developer.adobe.com/"
else
    echo "❌ Installation failed"
    echo "Try: sudo npm install -g n8n-nodes-frameio-0.1.0.tgz"
fi
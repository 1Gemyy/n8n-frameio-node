#!/usr/bin/env python3
import http.server
import socketserver
import os

# Change to the directory containing the .tgz file
os.chdir('/Users/mohamedhelal/n8n-custom-node')

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_GET(self):
        if self.path == '/download':
            self.path = '/n8n-nodes-frameio-community-0.1.0.tgz'
        return super().do_GET()

with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
    print(f"Server running at http://localhost:{PORT}/")
    print(f"Download link: http://localhost:{PORT}/download")
    httpd.serve_forever()
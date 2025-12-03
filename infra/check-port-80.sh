#!/bin/bash

echo "=== Checking Port 80 Usage ==="
echo ""

echo "1. Processes using port 80:"
sudo lsof -i :80 2>/dev/null || echo "  -> lsof command not found or no permission."
echo ""

echo "2. Checking port 80 with netstat:"
sudo netstat -tlnp | grep :80 2>/dev/null || echo "  -> netstat command not found or no permission."
echo ""

echo "3. Checking port 80 with ss:"
sudo ss -tlnp | grep :80 2>/dev/null || echo "  -> ss command not found or no permission."
echo ""

echo "4. System nginx service status:"
systemctl status nginx 2>/dev/null || echo "  -> systemd nginx service not found."
echo ""

echo "5. Apache service status:"
systemctl status apache2 2>/dev/null || systemctl status httpd 2>/dev/null || echo "  -> Apache service not found."
echo ""

echo "6. Checking if Docker containers use port 80:"
docker ps --format "table {{.Names}}\t{{.Ports}}" | grep :80 || echo "  -> No Docker containers using port 80."
echo ""

echo "7. Firewall status:"
sudo ufw status 2>/dev/null || sudo firewall-cmd --list-all 2>/dev/null || echo "  -> Firewall command not found."
echo ""

echo "=== Check Complete ==="


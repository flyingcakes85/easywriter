#!/usr/bin/bash

# $1 -> token
# $2 -> url

cd /tmp 
git clone https://$1@github.com/$2 > /tmp/log 2>&1
cd easywriter > /tmp/log 2>&1
cp app.py /home/chococandy/easywriter/app.py > /tmp/log 2>&1
cp deploy.sh /home/chococandy/easywriter/deploy.sh
cp templates /home/chococandy/templates -r > /tmp/log 2>&1
cp static /home/chococandy/static -r > /tmp/log 2>&1
cd ..
rm -rf easywriter

sleep 2 > /tmp/log 2>&1

sudo systemctl restart easywriter > /tmp/log 2>&1
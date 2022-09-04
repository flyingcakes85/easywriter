#!/usr/bin/bash

# $1 -> token
# $2 -> url

cd /tmp 
git clone https://$1@github.com/$2
cd easywriter
cp app.py /home/chococandy/easywriter/app.py
cp deploy.sh /home/chococandy/easywriter/deploy.sh
cp templates /home/chococandy/easywriter/ -r
cp static /home/chococandy/easywriter/ -r
cd ..
rm -rf easywriter

sleep 2

sudo systemctl restart easywriter
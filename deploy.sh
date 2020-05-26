#!/bin/bash
git pull
npm install
./node_modules/.bin/pm2 restart ./app.js

#!/bin/bash

docker rm -f xtream
docker rmi $(docker images --filter "dangling=true" -aq)

sleep 60

sudo pm2 restart xtream

docker build -t xtream .
docker run -d --name xtream --cpus=".5" -v /var/www/html/xtream_teeoff:/code  xtream

#!/bin/bash

docker build -t xtream .
docker run -d --name xtream --cpus=".5" -v $(pwd):/code  xtream
#sudo docker run -d --name xtream --cpus=".5" --restart on-failure -v $(pwd):/code  xtream
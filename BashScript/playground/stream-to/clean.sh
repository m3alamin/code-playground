#!/bin/bash

echo "Cleaning Xtream";
rm -f dl-*
rm -f supervisord*

echo "Cleaning docker dangling images";
docker rmi $(docker images --filter "dangling=true" -aq)

echo "Directory cleaned";
#!/bin/bash
sleep 1

. ./restapi--express/install.sh
. ./reactapp/install.sh

docker-compose up -d --build
docker exec -it app_restapi yarn run db:upsert

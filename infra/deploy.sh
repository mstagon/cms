#!/bin/bash

IS_BLUE_UP=$(docker ps | grep ${DOCKER_APP_NAME}-blue)

docker compose -f infra/docker-compose.yml up -d nginx

if [ "$IS_BLUE_UP" ]; then
  echo "✅ Blue is up → deploying Green"
  docker compose -f infra/docker-compose.yml pull green
  docker compose -f infra/docker-compose.yml up -d green

  while true; do
    sleep 2
    REQUEST=$(docker exec nginx wget --spider --quiet http://green:3000 && echo "OK")
    if [ "$REQUEST" = "OK" ]; then
      echo "🟢 Green is up"
      break
    fi
  done

  sed -i 's/blue/green/g' infra/nginx/default.conf
  docker exec nginx nginx -s reload
  docker compose -f infra/docker-compose.yml stop blue
else
  echo "✅ Green is up → deploying Blue"
  docker compose -f infra/docker-compose.yml pull blue
  docker compose -f infra/docker-compose.yml up -d blue

  while true; do
    sleep 2
    REQUEST=$(docker exec nginx wget --spider --quiet http://blue:3000 && echo "OK")
    if [ "$REQUEST" = "OK" ]; then
      echo "🔵 Blue is up"
      break
    fi
  done

  sed -i 's/green/blue/g' infra/nginx/default.conf
  docker exec nginx nginx -s reload
  docker compose -f infra/docker-compose.yml stop green
fi

echo "✅ Deploy complete"

docker system prune --all --force
docker volume rm $(docker volume ls -q)
docker-compose up --force-recreate

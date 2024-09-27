source .env
npm run build
docker-compose up -d
sleep 10
healthcheck=$(docker inspect --format="{{json .State.Health.Status}}" $MONGO_HOST | tr -d '"')
app="zigvy-app" 
echo $healthcheck
if [ $healthcheck = "healthy" ]; then
    docker exec $app node scraping.js
    echo 'initdb'
else
    echo "db unhealthy"
fi
echo 'done'

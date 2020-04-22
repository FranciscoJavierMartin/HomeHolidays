# Home holidays

With docker running

*For production mode*
docker-compose up --build

*For development mode*
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
docker-compose run --rm backend npm run dev

*For test mode*
docker-compose -f docker-compose.yml -f docker-compose.test.yml up -d --build
docker-compose run --rm backend npm test

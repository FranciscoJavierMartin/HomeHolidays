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

## TO-DO
- Add styles. Use a css framework like Bootstrap or semantic-ui. Another option is use a component framework like semantic-vue.
- Add CRUD operations for home owner.
- Add test for backend and frontend.
- Add suppport for PWA.
- Add responsive design.
- Add full support for Docker.
- Add swagger for documentation in the backend.
- Add support for CI/CD.
- Optionally add config files for syntax and editor support.
# CodeX Dev Ops Board - Backend

## API-Doc Link
https://documenter.getpostman.com/view/5821732/SWEB3GZ9

## How to run in production
Run the script at `app/bin/run` in the production environment

Afterwards the logs can be access within the screen session
```
screen -r DevopsMonitorBackend
```
To exit the screen session without stoping the script press `Ctrl-a` + `Ctrl-d`.

## Development Setup
Startup cocker containers
```
docker-compose up
```

Access docker containers
```
docker-compose exec app bash
```

Setup environment variables and adjust the variables according to environment
```
cp .env.example .env
```

Following commands can be run inside the docker container

Install npm packages
```
npm ci
```

Run Node server
```
npm run dev
```

Access web interface via *https://localhost*

## Notes
*app layout forked from https://github.com/dalenguyen/rest-api-node-typescript*

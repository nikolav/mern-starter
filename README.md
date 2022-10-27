# mern starter

## [api e2e tests](tests.api.e2e.txt)

## 1. copy .env files
  - ./reactapp/.env
  - ./restapi--express/.env

## 2. declare ports @deploy-env.sh, line:39-41

## 3. set api production address for client and api docs
  - @/reactapp/src/app/store/index.js, line:28-32
  - @/restapi--express/apidoc.json, line:6

## 4. allow io @/restapi--express/.env, line:41

## 5. install sys
  `$ . ./deploy-env.sh`

## 6. start app
  `$ . ./deploy.sh`

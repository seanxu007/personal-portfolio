FROM node:12.22.0-alpine as build-node


COPY nginx /app/nginx
COPY components /app/components
COPY pages /app/pages
COPY static /app/static
COPY styles /app/styles

COPY .nvmrc /app
# COPY docker-compose.yml /app
COPY next.config.js /app
COPY package-lock.json /app
COPY package.json /app
COPY postcss.config.js /app

WORKDIR /app/

RUN npm install;
RUN npm run export;

FROM nginx:latest

COPY --from=build-node /app/ /app/

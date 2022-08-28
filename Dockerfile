FROM node:12.22.0-alpine as build-node

COPY . /app/

WORKDIR /app/


RUN npm install;
RUN npm run export;

FROM nginx:latest

COPY --from=build-node /app/ /app/

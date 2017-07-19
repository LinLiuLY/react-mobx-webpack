FROM node:8.1.3-slim

LABEL maintainer "liulin1987315@gmail.com"

ENV PROJECT_DIR=/app NODE_ENV=dev APP_PORT=7000

WORKDIR $PROJECT_DIR

COPY package.json $PROJECT_DIR
RUN yarn install

COPY . $PROJECT_DIR

EXPOSE $APP_PORT



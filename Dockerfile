FROM node:8.1.3-slim

LABEL maintainer "liulin1987315@gmail.com"

ENV PROJECT_DIR=/app
WORKDIR $PROJECT_DIR

COPY package.json $PROJECT_DIR
RUN yarn install

COPY . $PROJECT_DIR

ENV NODE_ENV=dev \
    APP_PORT=7777

EXPOSE $APP_PORT
CMD yarn start

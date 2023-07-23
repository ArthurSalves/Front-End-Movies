FROM node:16.3-alpine

WORKDIR /usr/app
RUN npm install --global pm2

COPY ./package*.json ./

RUN npm install

## Copy all files project to image
COPY ./ ./

RUN npm run build

CMD pm2-runtime npm -- start

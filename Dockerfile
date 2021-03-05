FROM node:14.16.0-alpine3.10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY dist .

EXPOSE 8080

CMD [ "node", "index.js" ]
ARG BASE_BUILD=build
# Base is just light node config with common tools to building
# for building npm packages
FROM mhart/alpine-node:14.15.1 AS build

WORKDIR /app

COPY package.json package-lock.json ./

ENV TZ UTC

RUN apk add --no-cache --virtual .build-deps python make g++ && \
    npm ci && \
    apk del .build-deps

COPY . .

RUN chmod -R u+x scripts

RUN npm run build

CMD ["node", "./build/spark.js"]

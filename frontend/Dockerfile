FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

ARG APP_VERSION
ENV APP_VERSION=${APP_VERSION}

RUN npm install

COPY . .

RUN npm run build

ENV NODE_ENV=production
ENV PORT=4000

EXPOSE 4000

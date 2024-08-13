FROM node:18-alpine3.20 

WORKDIR /usr/src/app

COPY package.json .

RUN apk add --no-cache bash

RUN npm i
RUN npm install prisma
RUN npm install @prisma/client -g

COPY .env .
COPY prisma ./prisma/
COPY index.js .

RUN npx prisma generate


EXPOSE 3000

CMD ["npm", "run",  "start"]

FROM node:latest

WORKDIR /usr/src/app

COPY package.json .

RUN npm i
RUN npm install prisma
RUN npm install @prisma/client -g

COPY .env .
COPY prisma ./prisma/
COPY index.js .


RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run",  "start"]

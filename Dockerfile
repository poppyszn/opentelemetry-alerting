FROM node:latest

RUN mkdir /app

WORKDIR /app

COPY ./src/package*.json ./

RUN npm install

COPY ./src .

EXPOSE 3000

CMD ["npm", "start"]
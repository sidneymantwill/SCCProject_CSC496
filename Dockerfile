FROM node:carbon

WORKDIR /app

RUN npm install -g nodemon

COPY package*.json ./

RUN npm install
RUN npm install -g express

COPY src /app

EXPOSE 8080

CMD ["node", "app.js"]
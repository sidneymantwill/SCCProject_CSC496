FROM node:9

WORKDIR /src

COPY package.json /src

RUN npm install

COPY . /src

CMD node index.js

EXPOSE 8080

CMD /src/app.js
FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3001

CMD ["node", "dist/main"]
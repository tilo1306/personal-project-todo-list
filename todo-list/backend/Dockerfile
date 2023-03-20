FROM node

WORKDIR /usr/app

COPY ./package.json ./

COPY . ./prisma

COPY . .

RUN npm install

COPY . .

EXPOSE 3333

CMD [ "npm", "run", "start:migrate:dev" ]

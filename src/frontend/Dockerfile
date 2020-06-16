FROM node:latest

ADD ./package.json ./frontend/package.json

WORKDIR /frontend

RUN yarn install

COPY . /frontend

RUN yarn dev

CMD ["yarn", "live"]
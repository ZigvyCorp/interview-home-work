ARG NODE_VERSION=18.18

FROM node:${NODE_VERSION} as BUILDER

WORKDIR /app

COPY *.json ./

RUN npm install

# COPY . ./
COPY ./src src

RUN npm run build

CMD ["npm", "run", "start:prod"]
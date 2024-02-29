FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install

EXPOSE 5000
ENV NODE_ENV=development
CMD npm run dev
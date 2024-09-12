# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

ENV PORT=4000

EXPOSE $PORT

# Start the Express server
CMD ["yarn", "dev"]

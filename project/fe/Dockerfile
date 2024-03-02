# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:18-alpine
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN yarn install
# Build the app
RUN yarn build
# ==== RUN =======
EXPOSE 5173
# Start the app
CMD [ "yarn","dev" ]
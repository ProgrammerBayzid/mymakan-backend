# Use the official Node.js image with Yarn as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies using npm
RUN npm install

# Copy the application code to the container
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the port your app runs on
EXPOSE 4000

# Start the application
CMD ["npm", "run", "start:prod"]

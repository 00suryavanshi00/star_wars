# Use Node.js as a base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port specified in vite.config.js
EXPOSE 5175

# Start the application in development mode
CMD ["npm", "run", "dev"]
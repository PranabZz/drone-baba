# Use an official Node.js image as the base image
FROM node:18 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package manager lock file and package.json
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 (or any port your dev server uses)
EXPOSE 3000

# Start the React app in development mode
CMD ["npm", "run", "dev"]

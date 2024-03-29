# Use the official Node.js 16 image as base
FROM node:16

# Set the working directory inside the container
WORKDIR /src/app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Angular project
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Command to run the Angular application
CMD ["npm", "start"]


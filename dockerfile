# Use the official Node.js 16 image as base
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 4200 to the outside world
EXPOSE 4200

# Command to run the Angular development server with host binding
CMD ["ng", "serve", "--host", "0.0.0.0"]


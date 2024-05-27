# Use the official Node.js 16 image as base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
COPY..
RUN npm install -g @angular/cli@12.2.8
RUN npm install
RUN ng build --configuration=production

# Stage 2: Serve the Angular application using Nginx
FROM nginx:alpine
COPY --from=build /app/dist/angular-project /usr/share/nginx/html


# Expose port 4200 to the outside world
EXPOSE 80

# Command to run the Angular development server with host binding
CMD ["nginx", "-g", "daemon off;"]

# Use an official Node runtime as the base image
FROM node:16

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the directory /app in the container
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source inside the docker image
COPY . .

# Make port 3000 available to the world outside this container (or whatever port your app runs on)
EXPOSE 3000

# Run the app when the container is started
CMD [ "npm", "start" ]

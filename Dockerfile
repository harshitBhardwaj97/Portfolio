# Use the node:21 image
FROM node:21 as BUILD

# Set the working directory in the container
WORKDIR usr/src/app

# Copy the contents
COPY . .

# Install the dependencies
RUN npm install

# Expose the PORT
EXPOSE 5173

# Run the application
CMD [ "npm", "run", "dev", "--", "--host" ]

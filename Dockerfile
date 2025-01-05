# Use the official Node.js image
FROM node:22.11.0

# Install git
RUN apt-get update && apt-get install -y git

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
RUN git clone https://github.com/Richieleonardo/server-TST.git

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the desired port
EXPOSE 8071

# Start the application
CMD ["npm", "start"]

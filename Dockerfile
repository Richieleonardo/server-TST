# Use Ubuntu 22.04 as the base image
FROM ubuntu:22.04

# Set environment to avoid interactive prompts during installation
ENV DEBIAN_FRONTEND=noninteractive

# Update the package list and install prerequisites
RUN apt-get update && apt-get install -y \
    sudo \
    curl \
    gnupg \
    build-essential \
    git \
    && apt-get clean

# Add Node.js 22.x repository
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash -

# Install Node.js 22.x and npm
RUN apt-get install -y nodejs

# Verify installation
RUN node -v && npm -v

RUN npm install -g pm2

# Create a non-root user named 'docker' with sudo access
RUN useradd -ms /bin/bash docker \
    && echo "docker:docker" | chpasswd \
    && usermod -aG sudo docker

# Switch to the 'docker' user
USER docker

# Set working directory
WORKDIR /home/docker

RUN git clone https://github.com/Richieleonardo/server-TST.git

RUN cd server-TST && npm install

RUN pm2 
RUN pm2 start server-TST/server.js

# Expose a port (optional, for running applications)
EXPOSE 8071

# Default command
CMD [ "bash" ]

# Use Node.js LTS version
FROM node:18-slim

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy application code
COPY . .

# Expose website port
EXPOSE 9000

# Start server
CMD ["node", "index.js"]
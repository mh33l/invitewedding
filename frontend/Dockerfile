# Use Node.js for the frontend
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY frontend/ .

# Build the application
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

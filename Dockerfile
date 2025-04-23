FROM node:lts-alpine
WORKDIR /app

# Copy all project files
COPY . .

# Install a simple static file server
RUN npm install -g serve

# Expose port for Cloud Run
EXPOSE 8080

# Start the server (serve uses 8080 by default with -l)
CMD ["serve", "-s", ".", "-l", "8080"]

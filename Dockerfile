# Use lightweight Node.js image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy dependencies and install them
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of your app (source code, convex dir, etc.)
COPY . .

# Install Convex CLI globally to use `convex dev`
RUN npm install -g convex

# Expose ports for Next.js and Convex
EXPOSE 3000 8787


CMD ["npm", "run", "dev"]

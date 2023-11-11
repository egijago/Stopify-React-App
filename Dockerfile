FROM node:16-alpine

# set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# start app
EXPOSE 3000
ENTRYPOINT ["npm", "run", "dev"]

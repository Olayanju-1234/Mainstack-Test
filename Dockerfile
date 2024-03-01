FROM node:18-alpine

# Create app directory
WORKDIR /src/app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]

# Path: .dockerignore

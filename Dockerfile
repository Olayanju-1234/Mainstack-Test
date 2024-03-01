FROM node:18-alpine

# Create app directory
WORKDIR /src/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]

# Path: .dockerignore

# Mainstack-Test

# Description

A simple RESTful API to create and manage products in a store.

# Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run build` to build the project
4. Run `npm start` to start the server

# Docker

1. Run `docker build -t mainstack-test .` to build the docker image
2. Run `docker run -p 3000:3000 mainstack-test` to start the server

# Testing

Run `npm test` to run the tests -- the tests are written using Jest.

# Environment Variables

The required environment variables can be found in the `.env.example` file.

# Database

The API uses MongoDB as the database. You can use a local MongoDB instance or a cloud-based MongoDB service like MongoDB Atlas.

# Postman Collection

The postman collection for the API can be found [here](https://documenter.getpostman.com/view/33256974/2sA2xb6FF5).

# API Deployment

The API is deployed on Render and can be accessed [here](https://mainstack-test-a2e7.onrender.com).

# Technologies

- Node.js
- Express
- MongoDB
- Docker
- Jest
- Typescript
- JWT

# Token Authentication

The API uses token authentication for certain routes. To access the endpoints, you need to create a user and authenticate to get a token.

# License

MIT

# Author

[Joseph Olayanju](www.github.com/olayanju-1234)

# Fleet API Demo

A demonstration of a RESTful API for a fleet management app made with [NodeJS](https://nodejs.org/) and [ExpressJS 4](http://expressjs.com/). [MongooseJS](http://mongoosejs.com/) is used to define a schema/model for MongoDB.

## Requirements
Local installation of [MongoDB with the NodeJS driver](https://docs.mongodb.org/getting-started/node/).

## Getting Started
1. Clone this repo.
2. `npm install` from the root directory of the project.
3. Start MongoDB with `mongod`.
4. Use Postman or some other REST client to experiment with the API.

## API
The API provides endpoints for basic CRUD operations.

### Resource
`http://localhost:5000/fleet-api`

### GET: List Vehicles
`/vehicles`

### POST: Create vehicles
`/vehicles`

### GET: Get vehicle by id
`/vehicles/:vehicle_id`

### PUT: Update vehicle properties by id
`/vehicles/:vehicle_id`

### DELETE: Delete vehicle by id
`/vehicles/:vehicle_id`

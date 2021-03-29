# nodejs-rest-api
A simple REST Api with Node.JS, Express and MongoDB

### Overview
In order for the application to work properly, you need to change the URL in config/database.config.js to point to your MongoDB database. The application is simple.
You can populate the database with users by sending JSON objects with two properties - username and password. Each property is required and is of type "String".

#### Endpoints:

| PATH | Method  | Description  |
| :-----: | :-: | :-: |
| /api/users | GET | Returns all users |
| /api/users | POST | Creates an user |
| /api/users/:userId | GET | Returns an user with the specified id |
| /api/users/:userId | DELETE | Removes an user with the specified id |
| /api/users/:userId | PUT | Updates an user with the specified id |

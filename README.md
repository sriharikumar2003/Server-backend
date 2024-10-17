Healthcare Services API
This is a simple RESTful API built using Node.js and Express to manage a list of healthcare services, with MongoDB as the database. The API allows for creating, retrieving, updating, and deleting healthcare services.

Features
Add a new service: Add a healthcare service with a name, description, and price.
Get all services: Retrieve a list of all available healthcare services.
Update a service: Modify the details of an existing service by its ID.
Delete a service: Remove a healthcare service by its ID.
Technologies Used
Node.js: Backend JavaScript runtime.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database for storing services.
Mongoose: Object Data Modeling (ODM) library for MongoDB.
Body-Parser: Middleware for parsing request bodies.
Installation and Setup
Prerequisites
Node.js and npm (Node Package Manager) installed.
MongoDB installed and running locally, or a MongoDB Atlas cloud database.
Steps to Run the Project:
1.Clone the repository
2.Install dependencies(nodemon , express, body-parser, nodemon)
3.Start MongoDB
4.Run the server 
  code: nodemon app.js
Access the API: The server will run on http://localhost:3000. You can now use API testing tools like Postman to interact with the endpoints.

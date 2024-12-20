// const jsonServer = require("json-server"); // importing json-server library
// // const http=require("http")
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001
// server.use(middlewares);
// server.use(router);

// server.listen(port,()=>{
//     console.log(`server is running in ${port} `)
// })
const jsonServer = require("json-server"); // Importing json-server library
const cors = require("cors"); // Import the cors library

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const router1 = jsonServer.router("db1.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; // Choose port like 8080, 3001

// Enable CORS for all origins
server.use(cors());

// Use default middlewares (logging, static files, etc.)
server.use(middlewares);

// Use the JSON Server router
server.use(router);
server.use(router1)

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

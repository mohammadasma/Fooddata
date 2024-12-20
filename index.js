const jsonServer = require("json-server"); // importing json-server library
// const http=require("http")
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001
server.use(middlewares);
server.use(router);

server.listen(port,()=>{
    console.log(`server is running in ${port} `)
})
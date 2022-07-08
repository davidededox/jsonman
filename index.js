const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data.json"); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT; // <== You can change the port
//const port = 3000; // <== You can change the port

server.use(middlewares);
server.use(router);

console.log("SERVER LISTENING ON PORT ");

server.listen(port);

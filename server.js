// npm init -y
// npm i json-server
// create server.js
// copy template to server.js
// node server.js

const PORT = process.env.PORT || 3000;
const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use("/api", router);
server.listen(PORT, () =>
  console.log(`JSON Server is running on port ${PORT}`)
);

// To access database(i.e. db.json) we need ans API so:-
// 1. BASE URL : `http://localhost:3000/`
// 2. Endpoint : `/api/todo`
// 3. Query param : 
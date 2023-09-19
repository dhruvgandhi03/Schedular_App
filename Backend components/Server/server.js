const express = require("express");
const dotenv = require("dotenv");
const server = express();

dotenv.config({ path: "./.env" });

require("../database/connect");
require("../model/UserSchema");

server.use(express.json());

server.use(require("../Routes/SignUpRoute"));
server.use(require("../Routes/LogInRoute"));

const port = process.env.PORT;
console.log(port);

server.listen(port, () => {
  console.log("server running");
});

server.get("/", (req, res) => {
  res.send("this is server");
});

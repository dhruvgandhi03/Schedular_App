const express = require("express");
const dotenv = require("dotenv");
const server = express();
const cors = require("cors");

dotenv.config({ path: "./.env" });
server.use(cors());

require("../database/connect");
require("../model/UserSchema");
require("../model/TaskSchema");

server.use(express.json());

server.use(require("../Routes/SignUpRoute"));
server.use(require("../Routes/LogInRoute"));
server.use(require("../Routes/TaskRoute"));
server.use(require("../Routes/TaskdeleteRoute"));

const port = process.env.PORT;

server.listen(port, () => {
  console.log("server running");
});

server.get("/", (req, res) => {
  res.send("this is server");
});

const mongoose = require("mongoose");

const Db = process.env.DATABASE;
console.log(Db);

mongoose
  .connect(Db)
  .then(() => {
    console.log("mongodb connection succesful");
  })
  .catch((err) => {
    console.log(err);
  });

const express = require("express");
const router = express.Router();
const Task = require("../model/TaskSchema");

router.post("/deletetask", async (req, res) => {
  const { id } = req.body;

  console.log(id);

  try {
    await Task.deleteOne({
      _id: id,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Task = require("../model/TaskSchema");

router.get("/taskdetail", async (req, res) => {
  const mydata = await Task.find({});
  res.status(200).json({ mydata });
});

router.post("/taskdetail", async (req, res) => {
  const { Taskname, Taskdes, date, time } = req.body;
  console.log(Taskname, Taskdes, date, time);

  if (!Taskname || !Taskdes || !date || !time) {
    console.log("fill data properly");

    return res.status(400).json({ message: "fill data properly" });
  }

  try {
    const taskexist = await Task.findOne({ Taskname: Taskname });

    const sametime = await Task.findOne({ time: time });

    if (taskexist) {
      return res.status(410).json({ message: "Task Already Exist" });
    }
    if (sametime) {
      return res
        .status(422)
        .json({ message: "Multiple Task cannot be adjusted at same time" });
    }

    const task = new Task({ Taskname, Taskdes, date, time });

    await task.save();

    return res.status(200).json({ message: "Task added successfully" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

const express = require("express");
const User = require("../model/UserSchema");
const router = express.Router();

router.post("/authenticate", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({ message: "Fill data Properly" });
  }

  const userexist = await User.findOne({ email: email });

  if (!userexist) {
    return res.status(400).json({ message: "Wrong Credentials" });
  } else {
    if (userexist.password === password) {
      return res.status(200).json({ message: "Successfully Logged In" });
    } else {
      return res.status(400).json({ message: "Wrong Credentials" });
    }
  }
});

module.exports = router;

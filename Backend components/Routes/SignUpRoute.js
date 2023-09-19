const express = require("express");
const router = express.Router();
const User = require("../model/UserSchema");

router.get("/", (req, res) => {
  res.send("home page");
});
router.get("/register", (req, res) => {
  res.send("this is register page");
});
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  if (!name || !email || !password) {
    console.log("fill data properly");

    return res.status(400).json({ message: "fill data properly" });
  }

  try {
    const userexist = await User.findOne({ email: email });

    if (userexist) {
      return res.status(422).json({ message: "email already exist" });
    }

    const user = new User({ name, email, password });

    await user.save();

    return res.status(200).json({ message: "registration successful" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

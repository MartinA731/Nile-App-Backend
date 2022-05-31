const express = require("express");
const router = express.Router();
let users = require("../dummyDatabase");

router.get("/users", async (req, res) => {
  try {
    res.status(200).json({
      data: users
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

router.get("/:email", async (req, res) => {
  let { email } = req.params;
  try {
    let user = users.find(user => user.email === email);
    res.status(200).json({
      data: user
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

module.exports = router;
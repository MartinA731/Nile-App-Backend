const express = require("express");
const router = express.Router();
let merchants = require("../merchantsDatabase");

router.get("/merchants", async (req, res) => {
  try {
    res.status(200).json({
      data: merchants
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
    let merchant = merchants.find(merchant => merchant.email === email);
    res.status(200).json({
      data: merchant
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

module.exports = router;
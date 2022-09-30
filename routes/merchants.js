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

//add a new merchant to the database
// http://localhost:3001/merchants/merchants, 
// only parameter in body is email
router.post("/merchants", async (req, res) => {
  let { email } = req.body;
  console.log(email);
  try {
    merchants.push({email : email, clients : []})
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

//adding a client for current merchant (in this case user2@gmail.com)
//http://localhost:3001/merchants/user2@gmail.com
// three parameters in body are name, pickupID, date
router.post("/:email", async (req, res) => {
  let { email } = req.params;
  //this is the new client that youre adding
  let { name, pickupID, date  } = req.body;
  try {
    let merchant = merchants.find(merchant => merchant.email === email);
    merchant.clients.push({
      name : name,
      pickupID: pickupID,
      date : date
    });
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

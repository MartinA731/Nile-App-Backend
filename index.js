const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const port = process.env.PORT || 3001;
const usersRouter = require("./routes/users");
//addtion
const merchantRouter = require("./routes/merchants")

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/users", usersRouter);
//addition
app.use("/merchants", merchantRouter);
app.listen(port, function() {
  console.log("Runnning on " + port);
});
module.exports = app;
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors);

app.get("/", (req, res) => {
  return "hello";
});

app.listen(3000, () => {
  console.log("it's running,bro");
});

var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/about", function (req, res) {
  res.send("About Vivas");
});

app.get("/intro", function (req, res) {
  res.send("Introduction of Vivas");
});
app.listen(3000, function () {
  console.log("App is running at 3000");
  process.send("ready");
});

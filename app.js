var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(4000, function () {
  console.log("App is running at 4000");
});

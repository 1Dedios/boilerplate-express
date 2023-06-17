require("dotenv").config();
let express = require("express");
let app = express();
let absolutePath = __dirname + "/views/index.html";

app.use((req, res, next) => {
  let string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);

  next();
});

console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    return res.json({
      message: "HELLO JSON",
    });
  }
  return res.json({
    message: "Hello json",
  });
});

module.exports = app;

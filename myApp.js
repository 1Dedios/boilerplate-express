let express = require("express");
let app = express();
let absolutePath = __dirname + "/views/index.html";
// using .env file
require("dotenv").config();

app.use((request, response, next) => {
  console.log(request.method + " " + request.path + " - " + request.ip);
  next();
});
// Exercise 1:
console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));

// Exercise 2, 3:
app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

// Exercise 5: json response
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

// Exercise 8: time server with chained middleware
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date();
    next();
  },
  (req, res) => {
    return res.send({
      time: req.time,
    });
  }
);

// Exercise 9: route parameterized urls
app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

// Exercise 10: query parameter input from client

app.get("/name", (req, res) => {
  res.json({ name: req.query.name });
});

module.exports = app;

let express = require("express");
let app = express();
let absolutePath = __dirname + "/views/index.html";
let bodyParser = require("body-parser");
// using .env file
require("dotenv").config();

// Exercise 11 - middleware to parse url and extract data from the request body. b/c it's set to false it's using the classic
// way of parsing the url and body. Which means it only accepts strings and arrays.
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
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

// Exercise 10: query parameter input from client - Exercise 12: Get data from POST requests at "/name" endpoint
// IMPORTANT - you can use app.route(path).get(handler).post(handler) to chain different verb handlers on the same path route

// BELOW: how it was written solely for Exercise 10
// app.get("/name", (req, res) => {
//   res.json({ name: req.query.first + " " + req.query.last });
// });

app
  .route("/name")
  .get((req, res) => {
    res.json({ name: req.query.first + " " + req.query.last });
  })
  .post((req, res) => {
    res.json({ name: req.body.first + " " + req.body.last });
  });

module.exports = app;

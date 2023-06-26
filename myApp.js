let express = require("express");
let app = express();
let absolutePath = __dirname + "/views/index.html";
let bodyParser = require("body-parser");
// using .env file
require("dotenv").config();
bodyParser.urlencoded({ extended: false });

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

// Exercise 10: query parameter input from client - Exercise 11: Get Query Parameter Input from the Client at /name endpoint
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
  .post((req, res) => {});

module.exports = app;

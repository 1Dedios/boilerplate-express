let express = require('express');
let app = express();
let absolutePath = __dirname + "/views/index.html";

console.log("Hello World");

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
});


module.exports = app;



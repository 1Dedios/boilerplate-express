require('dotenv').config();
let express = require('express');
let app = express();
let absolutePath = __dirname + '/views/index.html';

console.log("Hello World");

app.use((req, res, next) => {
    console.log(req.method + " " + res.path + " - " + req.ip);
    next();
});


app.get('/', (req, res) => {
    res.sendFile(absolutePath);
});


// app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        return res.json({
            "message": "HELLO JSON"
        });
    } return res.json({
        "message": "Hello json"
    });
});

module.exports = app;



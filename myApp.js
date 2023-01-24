require('dotenv').config();
let express = require('express');
let app = express();
let absolutePath = __dirname + '/views/index.html';

console.log("Hello World");

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
});

app.use((req, res, next) => {
    let method = req.method;
    let path = req.path;
    let ip = req.ip;
    console.log(`${method}` + `${path}` - `${ip}`);
    next();
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



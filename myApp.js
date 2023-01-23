require('dotenv').config();
let express = require('express');
let app = express();
let absolutePath = __dirname + '/views/index.html';



console.log("Hello World");

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
    process.env.MESSAGE_STYLE,
        res.json({
            "message": "HELLO JSON"
        });
});

module.exports = app;



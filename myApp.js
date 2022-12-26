let express = require('express');
let app = express();
let absolutePath = __dirname + '/views/index.html';


console.log("Hello World");

app.get('/', (req, res) => {
    res.sendFile('views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
    res.json({
        "message": "Hello json"
    });
});

module.exports = app;



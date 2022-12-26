let express = require('express');
let app = express();
let absolutePath = __dirname + '/views/index.html';
let absolutePathTwo = __dirname + '/public/style.css';


console.log("Hello World");

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
});

app.use('/public', express.static(absolutePathTwo));

module.exports = app;



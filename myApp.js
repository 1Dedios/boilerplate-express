let express = require('express');
let app = express();
let absolutePath = __dirname + '/public';


console.log("Hello World");

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
});

app.use(express.static(absolutePath));

module.exports = app;



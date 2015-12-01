var express = require('express');
var bodyParser = require('body-parser');
var fs = require("fs");
var path = require('path');
var routes = require('./routes/index');
var fruites = require('./routes/fruites');
var comments = require('./routes/comments');
var calc = require('./routes/calc');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


app.use('/', routes);
app.use('/fruites', fruites);
app.use('/comment', comments);
app.use('/calc', calc);

app.get('/users', function (req, res) {
    console.log('Reuest recived!!!');
    res.sendFile('users.json', {root: __dirname});
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://localhost:3000');
});

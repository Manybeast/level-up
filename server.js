var express = require('express');
var bodyParser = require('body-parser');
var fs = require("fs");
var path = require('path');
var routes = require('./routes/index');
var fruites = require('./routes/fruites');
var comments = require('./routes/comments');
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

app.get('/users', function (req, res) {
    console.log('Reuest recived!!!');
    res.sendFile('users.json', {root: __dirname});
});

app.post('/sum', function (req, res) {
    if (req.body.a && req.body.b) {
        var result = parseFloat(req.body.a) + parseFloat(req.body.b);
        console.log(result);

        res.status(200).send(String(result));
    } else {
        res.status(404).send('not found');
    }
});

app.post('/mul', function (req, res) {
    console.log(req.body);
    if (req.body.a && req.body.b) {
        var result = parseFloat(req.body.a) * parseFloat(req.body.b);
        console.log("RESULT === " + result);
        res.status(200).send(String(result));
    } else {
        res.status(404).send('not found');
    }
});

app.post('/dif', function (req, res) {
    console.log(req.body);
    if (req.body.a && req.body.b) {
        var result = parseFloat(req.body.a) - parseFloat(req.body.b);
        console.log("RESULT === " + result);
        res.status(200).send(String(result));
    } else {
        res.status(404).send('not found');
    }
});

app.post('/div', function (req, res) {
    console.log(req.body);
    if (req.body.a && req.body.b) {
        var result = parseFloat(req.body.a) / parseFloat(req.body.b);
        console.log("RESULT === " + result);
        res.status(200).send(String(result));
    } else {
        res.status(404).send('not found');
    }
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://localhost:3000');
});

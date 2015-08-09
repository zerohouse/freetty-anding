var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    path = require('path');

//
//var mongoDB = require('mongodb'),
//    ObjectID = mongoDB.ObjectID,
//    mongoose = require('mongoose');
//
//mongoose.connect('mongodb://localhost:27017/freetty');


app.use(function (req, res, next) {
    res.charset = "utf-8";
    next();
});
app.use('/', express.static('app'));

http.listen(80, function () {
    console.log('listening on *:80');
});


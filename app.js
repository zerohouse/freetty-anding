var express = require('express'),
    app = express(),
    http = require('http').Server(app);


var mongoDB = require('mongodb'),
    ObjectID = mongoDB.ObjectID,
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/beta');

var User = mongoose.model('user', mongoose.Schema({
    email: String,
    name: String,
    phone: String
}));

app.get('/api/user', function (req, res) {
    var user = new User(req.query);
    user.save(function (err, result) {
        var resu = {};
        resu.result = result;
        resu.err = err;
        res.send(resu);
    });
});


app.use(function (req, res, next) {
    res.charset = "utf-8";
    next();
});
app.use('/', express.static('app'));

http.listen(80, function () {
    console.log('listening on *:80');
});


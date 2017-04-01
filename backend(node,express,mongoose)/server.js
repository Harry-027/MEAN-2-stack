var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var url = require('url');


var app = express();
mongoose.connect('mongodb://localhost:27017/users', function(err) {
    if(err) {
        console.log(err);
    }
});



var Schema = mongoose.Schema;
var UserSchema = new Schema({
    title: String,
    platform: String,
    score: Number,
    genre:String,
    editors_choice: String
});

var User = mongoose.model('games', UserSchema);

app.get('/search', function(req,res) {

// Domain you wish to allow
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');


// Set to true if you need the website to include cookies in  requests
res.setHeader('Access-Control-Allow-Credentials', true);

var url_parts = url.parse(req.url, true);
var title= url_parts.query;
console.log('Query',title);

User.find({'title': title.query}, function(err, docs) {
    console.log("docs",docs);
    res.json(docs);
    });

});


app.get('/', function(req,res) {

// Domain you wish to allow
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');


// Set to true if you need the website to include cookies in  requests
res.setHeader('Access-Control-Allow-Credentials', true);

    User.find({}, function(err, docs) {
    res.json(docs);
    });
   
});

app.listen('8000', function() {
    console.log("working");
});
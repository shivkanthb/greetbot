var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var yobot = require('./Yobot');

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req,res){

	res.json({msg:"hello"});
});

app.post('/yo', yobot);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send("Oops");
});

app.listen(port, function(){

	console.log("listening on port :"+port);
});
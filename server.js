
var express = require('express');

var app = express();

app.configure(function() {
  app.use(express.bodyParser());
  app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','OPTIONS, GET, POST');
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-with, Content-Type, Accept');
      next();
  })
});

app.get('/name', function(req, res){
  res.json({name: "Alden Aikele"});
});

app.get('/location', function(req, res){
  res.json({location: "Provo, UT"});
});

app.get('/hobbies', function(req, res){
  var hobbies = ["whatever", "you know", "ok"];
  var order = req.query.order;
  if(order=='asc'){
  	hobbies.sort();
  } 
    if(order=='desc'){
  	hobbies.sort().reverse();
  } 
  res.json(hobbies)
});

app.get('/occupation', function(req, res){
  res.json({name: "occupation"});
});

app.get('/occupation/latest', function(req, res){
  res.json({name: "occupation/latest"});
});

// app.post('/', function(req, res) {
// messages.push(req.body);
// res.send(req.body);
// });

app.listen(12000);
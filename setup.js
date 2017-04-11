var express = require('express');
var app = express();


// MIDDLEWARE
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var inputNum = 7;
app.get('/pickanumber', function(request, response){
  var num = parseInt(request.query.number);
  if (num === inputNum){
    response.send('Nailed it!');
  }
  else if (num > inputNum){
    response.send('Too High!');
  }
  else if (num < inputNum) {
    response.send('Too Low');
  }
  else {
    response.send('No idea!');
  }
});


  app.post('/pickanumber', function(request, response){
    inputNum = parseInt(request.body.number);
    response.status(200).send('Number was added!');
  });

var server = app.listen(5000, function(){
  console.log("HTTP server listening at localhost:5000");
});

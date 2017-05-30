// requires
var express = require ('express');
var app = express();
var path = require ('path');
var bodyParser = require ('body-parser');

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded ({extended: true}));

//listen
app.listen (3000, function(){
  console.log('server up on 3000');
});

//base url
app.get ('/', function(req, res){
  console.log('base URL hit');
  res.sendFile(path.resolve('views/index.html'));
});

app.post ('/solveEquation', function(req, res){
  console.log('post hit to /solveEquation:', req.body);
  // determine what type the object has & give it a function
  var answer;
  var x = Number(req.body.x);
  var y = Number(req.body.y);
  var sign = req.body.type;
  switch (sign) {
    case 'add':
      answer = x + y;
      break;
    case 'subtract':
      answer = x - y;
      break;
    case 'multiply':
      answer = x * y;
      break;
    case 'divide':
      answer = x / y;
      break;
  } // end switch statement
  // create object to send back
  var responseObject = {
    correctAnswer: answer
  };
  // send back to client
  res.send(responseObject);
}); // end POST solveEquation

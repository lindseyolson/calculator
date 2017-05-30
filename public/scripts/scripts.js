$(document).ready(function(){
  $('.mathButton').on('click', solveEquation);
  $('#clearButton').on('click', emptyInputs);
});// end document on Ready

var solveEquation = function(){
  console.log('in solveEquation function');
  //get user input; create object to send
  var objectToSend = {
   x: $('#x').val(),
   y: $('#y').val(),
   type: this.id
 }; // end objectToSendd
 console.log('sending:', objectToSend);
 // ajax to send object to server
 $.ajax ({
   type: 'POST',
   url: '/solveEquation',
   data: objectToSend,
   success: function (response){
     console.log('back from post:', response);
     console.log(response.correctAnswer);
     $('#outputDiv').append('<p>' + response.correctAnswer + '</p>');
   } // end success
 }); // end ajax
}; // end solveEquation function

var emptyInputs = function(){
  console.log('in emptyInputs function');
  $('#outputDiv').empty();
  $('#x, #y').val('');
}; // end emptyInputs function

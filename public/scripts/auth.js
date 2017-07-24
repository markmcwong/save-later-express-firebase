const email = "markwongmanchun@gmail.com"
const password = "manchun8"

$('.button').click(function(){
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
});

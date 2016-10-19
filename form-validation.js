function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var txt = userEntered.length;
  if(txt < 6 || userEntered.indexOf(" ")>=0){

  document.getElementById("usernameError").innerHTML
 = "username must be six characters and no spaces.";
document.getElementById("usernameError").classList.remove("hidden-message");
document.getElementById("usernameError").classList.add("shown-message");
document.getElementById("usernameGroup").classList.add("has-error");
}

var password = "password";
var lowercasePassword = passEntered.toLowerCase();
if(lowercasePassword == password){
  document.getElementById("passwordError").innerHTML = "password cannot be password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  document.getElementById("passwordGroup").classList.add("has-error");
  }

else if(passEntered.length < 6 || passEntered.length > 20) {
  document.getElementById("passwordError").innerHTML = "password must have 6-20 characters."
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
}
}
var words = "Oonce, Twice, Thrice!";
var uppercaseWords = words.toUpperCase();

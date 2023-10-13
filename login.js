
//var password = "hello";
function passcheck(){
if(Element('popup').value == password){
  document.getElementById('popup').style.display = 'none';
}};
var fill = document.getElementById("fill");
var popup = document.getElementById("popup"); // get the popup element by id
var password = document.getElementById("password"); // get the password input element by id
var correctPassword = "H";// define the correct password

// define a function that hides the popup if the password is correct
function checkPassword() {
  if (password.value == correctPassword) {
    popup.style.display = "none";
    fill.style.filter = "blur(0px)"
  }
}

// assign the checkPassword function to the onkeyup event of the password input element
password.onkeyup = checkPassword;
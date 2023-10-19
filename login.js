
//var password = "hello";
var fill = document.getElementById("fill");
var popup = document.getElementById("popup"); // get the popup element by id
var password = document.getElementById("password"); // get the password input element by id
var correctPassword = "624906";// define the correct password
var password1 = "633394"
var password2 = "618668"
var password3 = "Kirchner"

// define a function that hides the popup if the password is correct
function checkPassword() {
  if (password.value == correctPassword) {
    popup.style.display = "none";
    fill.style.filter = "blur(0px)"
  }
  if (password.value == password1) {
    popup.style.display = "none";
    fill.style.filter = "blur(0px)"
  }
  if (password.value == password2) {
    popup.style.display = "none";
    fill.style.filter = "blur(0px)"
  }
  if (password.value == password3) {
    popup.style.display = "none";
    fill.style.filter = "blur(0px)"
  }
}

// assign the checkPassword function to the onkeyup event of the password input element
password.onkeyup = checkPassword;
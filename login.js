
setInterval(checkPasswordistrue, 1);

function checkPasswordistrue() {
  var rightpassword = localStorage.getItem("rightpassword")
  if (rightpassword !== null) {
    popup.style.display = "none";
    fill.style.filter = "blur(0px)";
}
};
//var password = "hello";
var fill = document.getElementById("fill");
var popup = document.getElementById("popup"); // get the popup element by id
var password = document.getElementById("password"); // get the password input element by id
var Password0 = "624906";// define the correct password
var password1 = "633394"  
var password2 = "618668"
var password3 = "Kirchner"
var password4 = "cerda"
var password5 = "Moreno"
// define a function that hides the popup if the password is correct
function checkPassword() {
  var rightpassword = localStorage.getItem("rightpassword")
  if (rightpassword !== null) {
    popup.style.display = "none";
    fill.style.filter = "blur(0px)";
  }
  if (password.value == Password0) {
    popup.style.display = "none";
    fill.style.filter = "blur(0px)";
    localStorage.setItem('rightpassword', 'true');
  }
  if (password.value == password1) {
    popup.style.display = "none";
    fill.style.filter = "blur(0px)";
    localStorage.setItem('rightpassword', 'true');
  }
  if (password.value == password2) {
    popup.style.display = "none";
    fill.style.filter = "blur(0px)";
    localStorage.setItem('rightpassword', 'true');
  }
  if (password.value == password3) {
    popup.style.display = "none";
    fill.style.filter = "blur(0px)";
    localStorage.setItem('rightpassword', 'true');
  }
  if (password.value == password4) {
    popup.style.display = "none";
    fill.style.filter = "blur(0px)";
    localStorage.setItem('rightpassword', 'true');
  }
  if (password.value == password5) {
    popup.style.display = "none";
    fill.style.filter = "blur(0px)";
    localStorage.setItem('rightpassword', 'true');
  }
};

// assign the checkPassword function to the onkeyup event of the password input element
password.onkeyup = checkPassword;
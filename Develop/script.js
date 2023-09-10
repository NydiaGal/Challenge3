// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
var numbers = "0123456789";
var special = "! #$%&'()*+,-./:;<=>?@[\]^_`{|}~"

function generatePassword (){
  var userInput = window.prompt("Enter desired password length");
  var passwordLength = parseInt(userInput);
  if (passwordLength) {
    return "Unable to generate password due to minimum criteria not being met"
  }}

  var userSelections = Math.floor(Math.random() * passwordLength.length);
  var computerRandomChoice = userInput[index];

  window.alert("The computer chose " + computerRandomChoice);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
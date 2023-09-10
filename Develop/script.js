// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
var numbers = "0123456789";
var special = "! #$%&'()*+,-./:;<=>?@[\]^_`{|}~"

function generatePassword (){
  var input = window.prompt("Enter desired password length.");
  var passwordLength = parseInt(userInput);

  if (!passwordLength || passwordLength <8) {
    alert("Unable to generate password due to minimum criteria not being met.");
    return;
  }}

  var userSelections = lowercase;
  var includeUppercase = window.confirm("Include uppercase letters?");
  var includeLowercase = window.confirm("Include lowercase letters?");
  var includeSpecial = window.confirm("Include special characters?");

  if (includeUppercase) {
    userSelections + uppercase;
  }
  if (includeUppercase) {
    userSelections + lowercase;
  }
  if (includeSpecial) {
    userSelections + special;
  }

  var generatedPassword = ""
    var randomIndex = Math.floor(Math.random() *userSelections.length);
    for (var i=0; i< passwordLength; i++) {
      generatePassword += userSelections.charAT(randomIndex);
    }

  window.alert("The computer chose " + generatedPassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
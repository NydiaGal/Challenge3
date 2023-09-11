// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
var numbers = "0123456789";
var special = "! #$%&'()*+,-./:;<=>?@[\]^_`{|}~"

function generatePassword (){
  var input = window.prompt("Enter desired password length.");
  var passwordLength = parseInt(input);
  
  if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    alert("Unable to generate password due to minimum criteria not being met.");
    return;
  }

  var userSelections = lowercase;
  var includeuppercase = window.confirm("Include uppercase letters?");
  var includelowercase = window.confirm("Include lowercase letters?");
  var includespecial = window.confirm("Include special characters?");

  if (includeuppercase) {
    userSelections += uppercase;
  }
  if (includelowercase) {
    userSelections += lowercase;
  }
  if (includespecial) {
    userSelections += special;
  }

  var generatedPassword = ""
  for (var i=0; i< passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() *userSelections.length);
      generatedPassword += userSelections.charAt(randomIndex);
  }

  window.alert("The computer randomly chose " + generatedPassword);

  return generatedPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
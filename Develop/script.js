// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = prompt("Enter desired password length");
console.log (generatePassword);

function generatePassword ()

// Prompt the user to choose a length of at least 8 characters and no more than 128 characters
// Store in variable (name it)
// If it isnt, keep prompting until they enter a valid value.  
// maybe use a while loop for this.
// for loop doesnt really work because loops are usually use for a set of number iterations.
// Remember: prompt always returns a string even if the string is made up of numbers.
// Convert the string entered by user to a number. This may be an issue to address.
if ("42" > "8") {
  console.log("It's a greater than minimum");
}
// Ask user if they want to include the following:
// Prompt the user to confirm if using uppercase.
// Prompt the user to confirm if using lowercase.
// Prompt the user to confirm if using numbers.
// Prompt the user to confirm if using special characters (https://www.owasp.org/index.php/Password_special_characters)
// Track answers
// Probably use # character until #
// Use the confirm() method to get the Boolean value/answer to prompts
// Validate input that at least one character type should be selected
// WHEN all prompts are answered.
// Generate a random password based on criteria provided
// If no criteria is provided - Display alert "Unable to generate password due to minimum criteria not being met"
//  


var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
var numbers = "0123456789";
var special = "! #$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
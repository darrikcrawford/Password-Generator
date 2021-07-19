// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  // choose length of password form 8-128
  var passwordCharacterCount = window.prompt ("How many charaters in your password? Enter number from 8 - 128.");
    if (i < 8 || i > 128) {
      window.prompt ("Entry must be between 8 and 128!")
    }
  // ask what characters types to include

  // return if noting is selected

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// lowercase variables
function getLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// upercase variables
function getUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// numbers variables
function getNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// include symbols
function getRandomSymbol() {
	var symbols = "!@#$%^&*)_+(-=,./<}>?{|][:"
	return symbols[Math.floor(Math.random() * symbols.length)];
}
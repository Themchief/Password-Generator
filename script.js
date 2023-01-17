// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let length =parseInt(
    prompt("Enter the number of characters you would like your password to contain")
  )
  if(isNaN(length) === true) { 
    alert(`Password must be entered as a number`)}
    if(length <=10){
    alert(`Password must have a minimum of characters`);
    return;}
    if(length >= 65){
      alert(`Password must have no more than 64 characters`);
      return;}
      let hasSpecialCharacters = confirm( "Click ok to confirm if special characters are included")
      let hasNumericCharacters = confirm( "Click ok to confirm if Numeric characters are included")

      let hasLowercaseCharacters = confirm( "Click ok to confirm if Lowercase characters are included")
      let hasUppercaseCharacters = confirm( "Click ok to confirm if Uppercase characters are included")
    if(hasSpecialCharacters === false &&
      hasNumericCharacters === false &&
      hasLowercaseCharacters === false &&
      hasUppercaseCharacters === false) {alert(` Must select at least from each set`)}
      
      
    }

// Function for getting a random element from an array
function getRandom(arr) {
   let randomIndex = Math.floor(Math.random() * arr.length) 
   let randomElement = arr[randomIndex];
   
   return randomElement;
}

// Function to generate password with user input
function generatePassword() {

  let options = getPasswordOptions();
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
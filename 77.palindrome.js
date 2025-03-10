// pallindrome is a number that reads the same forward and backward.
// For example, 121,1331, and 4554 are palindroms

function validatePalin(str) {
  str = str.toString(); //convert to string if input not a string
  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      console.log(str + "is not a palindrome");
      return; // exit the function
    }
  }
  console.log(str + " is pallindrome");
}

validatePalin(121);

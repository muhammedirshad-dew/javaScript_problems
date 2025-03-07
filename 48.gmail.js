//gmail validation

function gmail(gmail) {
  return gmail.endsWith("@gmail.com") ? "valid gmail" : "try again";
}
console.log(gmail("apple"));

///Another method
function isGmail(email) {
  const re = /^[^\s@]+@gmail\.com$/;
  return re.test(email);
}
console.log(isGmail("apple")); //false
console.log(isGmail("jhon.doe@gmail.com")); //true

// Breakdown of the Regex Pattern
//  /^[^\s@]+@gmail\.com$/
// ^ → Start of the string.
// [^\s@]+ → Matches one or more (+) characters that are NOT (^) spaces (\s) or '@'.
// Ensures that the email starts with valid characters before @gmail.com.
// @gmail\.com → Matches exactly "@gmail.com"
//  (escaped . with \. to avoid treating it as a wildcard).
// $ → End of the string.
// Ensures there are no extra characters after "@gmail.com".

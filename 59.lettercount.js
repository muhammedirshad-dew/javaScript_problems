//Function to find the letter count

function char_count(str, letter) {
  var letter_count = 0;
  for (var position = 0; position < str.length; position) {
    if (str.charAt(position) == letter) {
      letter_count += 1;
    }
  }
  return letter_count;
}
console.log(char_count("w3resource.com", "r"));

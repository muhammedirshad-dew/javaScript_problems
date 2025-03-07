//check leap year
// A year, occurring once every four years, which has 366 days including 29 February.
function isLeapYear(year) {
  if (year % 100 === 0) {
    return year % 400 == 0;
  }
  return year % 4 === 0;
}

console.log(isLeapYear(2020)); //true
console.log(isLeapYear(2019)); //false

//or

function leapyear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(leapyear(2003));

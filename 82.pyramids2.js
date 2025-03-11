//pyramid
const n = 5;
let pyramid = "";

for (let i = 1; i <= n; i++) {
  let row = " ".repeat(n - i) + "*".repeat(2 * i - 1);
  pyramid += row + "\n";
}
console.log(pyramid);

//inverted pyramid pattern
const n1 = 5;
let invertedPyramid = "";

for (let i = n; i >= 1; i--) {
  let row = " ".repeat(n1 - i) + "*".repeat(2 * i - 1);
  invertedPyramid += row + "\n";
}
console.log(invertedPyramid);

//Hollow pyramid pattern
const n2 = 5;
let hollowPyramid = "";

for (let i = 1; i <= n2; i++) {
  let row = " ".repeat(n2 - i);
  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j === 1 || j === 2 * i - 1 || i === n2) {
      row += "*";
    } else {
      row += " ";
    }
  }
  hollowPyramid += row + "\n";
}
console.log(hollowPyramid);

//inverted hollow pyramid
const n3 = 5;
let invertedhollowPyramid = "";

for (let i = n3; i >= 1; i--) {
  let row = " ".repeat(n3 - i);
  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j === 1 || j === 2 * i - 1 || i === n3) {
      row += "*";
    } else {
      row += " ";
    }
  }
  invertedhollowPyramid += row + "\n";
}
console.log(invertedhollowPyramid);

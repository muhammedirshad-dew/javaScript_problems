//mirror hollow rombus
const n4 = 5;
let str4 = "";
for (let i = 1; i <= n4; i++) {
  let row = " ";
  for (let j = 1; j < i; j++) {
    row += " ";
  }
  for (let j = 1; j <= n4; j++) {
    if (j === 1 || j === n4 || i === 1 || i === n4) {
      row += "*";
    } else {
      row += " ";
    }
  }
  str4 += row + "\n";
}
console.log(str4);

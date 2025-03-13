//Hollow rombus

const n1 = 5;
let str1 = "";
for (let i = 1; i <= n1; i++) {
  let row = "";
  for (let j = 1; j <= n1 - i; j++) {
    row += " ";
  }
  for (let j = 1; j <= n1; j++) {
    if (j === 1 || j === n1 || i === 1 || i === n1) {
      row += "*";
    } else {
      row += " ";
    }
  }
  str1 += row + "\n";
}
console.log(str1);

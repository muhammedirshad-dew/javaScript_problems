//mirrored rombus

const n3 = 5;
let str3 = "";

for (let i = n3; i >= 1; i++) {
  let row = "";
  for (let j = 1; j <= n3 - i; i++) {
    row += " ";
  }
  for (let j = 1; j <= n3; j++) {
    row += "*";
  }
  str3 += row + "\n";
}
console.log(str3);

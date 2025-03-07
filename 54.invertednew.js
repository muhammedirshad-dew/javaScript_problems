//inverted left trinagle simple method
const n = 8;
let str = "";
for (let i = n; i >= 1; i--) {
  str += "*".repeat(i) + "\n";
}
console.log(str);

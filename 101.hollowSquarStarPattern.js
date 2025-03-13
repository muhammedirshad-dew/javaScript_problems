// Hollow square star pattern program 


const m = 5;
let str = "";
for (let i = 1; i <= m; i++) {
  for (let j = 1; j <= m; j++) {
    if (i == 1 || i == m || j == 1 || j == m){
        str += '* ';
    }else {
        str += '  ';
    }
  }
  str += '\n';
}

// print the star pattern
console.log(str);

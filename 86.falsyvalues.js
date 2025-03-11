// 5-Javascript program to Remove Falsy Values in an array?

let arr = [1, 0, "hello", "", null, undefined, true, false];

let removfalsy = removeFalsyValues(arr);
console.log(removfalsy);

function removeFalsyValues(arr) {
  arr.forEach((val, index) => {
    if (!val) {
      arr.splice(index, 1);
    }
  });
  return arr;
}

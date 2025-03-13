//Print row index number n element of the following row i an array

var arr = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [3, 7, 13, 26],
  [20, 25, 22, 22],
];

for (var i in arr) {
  console.log(`row ${i}`);
  for (var j in arr[i]) {
    console.log(arr[i][j]);
  }
}

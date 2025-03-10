function pascalsTriangle(n) {
  let triangle = [];
  for (let i = 0; i < n; i++) {
    let row = [1];
    if (triangle.length > 0) {
      let lastRow = triangle[triangle.length - 1];
      for (let j = 0; j < lastRow.length - 1; j++) {
        row.push(lastRow[j] + lastRow[j + 1]);
      }
      row.push(1);
    }
    triangle.push(row);
  }
  return triangle;
}

function printTriangle(triangle) {
  for (let row of triangle) {
    console.log(row.join(" "));
  }
}

// Example usage:
let n = 5;
let triangle = pascalsTriangle(n);
printTriangle(triangle);

function pascalTriangleSimplePrint(numRows) {
  const triangle = pascalTriangleSimple(numRows); // Use the simple function from before

  for (let row of triangle) {
    console.log(row.join(" ")); // Print each row with spaces between elements
  }
}

function pascalTriangleSimple(numRows) {
  const triangle = [];
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
    }
    triangle.push(row);
  }
  return triangle;
}

pascalTriangleSimplePrint(5);

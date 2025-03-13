//check the triangle is equilateral isosceless or orthogonal

function triangle(a, b, c) {
  if (a === b && b === c) {
    console.log("Equilateral");
  } else if (a === b || a === c || b === c) {
    console.log("Isosceless");
  } else {
    console.log("Scalene");
  }
}

console.log(triangle(5, 5, 6));
console.log(triangle(5, 5, 5));
console.log(triangle(4, 6, 7));

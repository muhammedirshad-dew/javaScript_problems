//calculate the average value of the square numbers in an array

let num = [25, 45, 55, 77, 88, 99];

const square = num.map((a) => a * a);
console.log(square);

let avg = square.reduce((a, b) => a + b, 0) / square.length;
console.log("Average:", avg);

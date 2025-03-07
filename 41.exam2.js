//filter//map//reduce
//the sum of the following an square the numbers divisible by 5
let array = [10, 15, 20, 25, 30, 35, 40, 45, 50];
//filter numbers divisible by 5 square them and then sum them up
let sum = array
  .filter((num) => num % 5 === 0) //filter numbers divisible by 5
  .map((num) => num ** 2) //square the filtered numbers
  .reduce((a, b) => a + b, 0); //sum the squared numbers
//100+225+400+625+900+1225+1600+2025+2500=9600

// initial value

// a = 0
// First Iteration:

// a = 0 + 100 = 100
// Second Iteration:

// a = 100 + 225 = 325
// Third Iteration:

// a = 325 + 400 = 725
// Fourth Iteration:

// a = 725 + 625 = 1350
// Fifth Iteration:

// a = 1350 + 900 = 2250
// Sixth Iteration:

// a = 2250 + 1225 = 3475
// Seventh Iteration:

// a = 3475 + 1600 = 5075
// Eighth Iteration:

// a = 5075 + 2025 = 7100
// Ninth Iteration:

// a = 7100 + 2500 = 9600

console.log(sum); //output the sum


///calculate the let num=[25,45,55,77,88,99]
//  average value of the square number in an array
//squaring nums arrays values 
let num=[25,45,55,77,88,99]
const square = num.map(num=>num*num)
console.log(square);

//finding average of square number
let average=square.reduce((acc,cur)=>acc+cur,0)/num.length;
console.log(average)
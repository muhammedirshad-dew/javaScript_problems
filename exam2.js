array = [1,2,3,4,5,6,7,8,9,10];

// filter  map

//array of odd
var fil = array.filter(num => num % 2 != 0)
console.log(fil)


// array of numbers divisible by 2 or 5

var fil = array.filter(num => num%2 == 0 || num % 5 == 0)
console.log(fil)

// array of numbers divisible by 3 and then squared those numbers

var fil = array.filter(num => num % 3 == 0)
console.log(fil)


var mapping = fil.map((num) => num ** 2);
console.log(mapping);


//Relational operators
let a = 10; //Declara variable a

console.log("Relational operators:");
console.log("a > 5:", a > 5);
console.log("a < 5:", a < 5);
console.log("a == 10:", a == 10);
console.log("a != 10 :", a != 10);

//increment and decrement operators
let b = 20;
console.log("Increment and Decrement Operators");
console.log("a before increment:", a);
console.log("a++ (post-increment):", a++); //prints original value
console.log("a after increment:", a);
console.log("b before decrement:", b);
console.log("b-- post decrement:", b--);
console.log("b after post decrement:", b);

//shorthand operators
let x = 10;
console.log("Shorthand operators:");
x += 5;
console.log("x += 5:", x);
x -= 3;
console.log("x -= 3:", x);
x *= 2;
console.log("x *= 2", x);

//logical operators
console.log("Logical operators");
console.log("a > 5 && b >19 :", a > 5 && b > 19);
console.log("a > 5 || b > 19 :", a > 5 || b > 19);
console.log("!a > 5 :", !(a > 5));

//decision making statement
console.log("Decision-Making Statements:");
if (a > 5) {
  console.log("a is greater than 5");
} else {
  console.log("a is less than or equal to 5");
}

//fidn lcm
//The goal of the code is to find the leat commom Multiple (lcm) of two numbers
//using the greatest common Diviser(Gcd)
const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};
const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

console.log(lcm(4, 5)); //output:20
console.log(lcm(8, 15)); //output:120

// ///1. Finding the Greatest Common Divisor (GCD)
// The function gcd(a, b)
// calculates the greatest common divisor of two numbers
// using recursion and the Euclidean algorithm.

// gcd(8, 12)
// gcd(12, 8) → gcd(8, 4) → gcd(4, 0) → returns 4
// gcd(15, 20)
// gcd(20, 15) → gcd(15, 5) → gcd(5, 0) → returns 5

// 2. Finding the Least Common Multiple (LCM)
// The function lcm(a, b) uses the formula:

// LCM(a, b) = (a * b) / GCD(a, b)

// Example 1: LCM of 4 and 5
// javascript

// console.log(lcm(4, 5));
// gcd(4,5) = 1
// lcm(4,5) = (4 × 5) / 1 = 20
// ✅ Output → 20

// Example 2: LCM of 8 and 15

// console.log(lcm(8, 15));
// gcd(8, 15) = 1
// lcm(8, 15) = (8 × 15) / 1 = 120
// ✅ Output → 120

// Key Concepts Used
// Euclidean Algorithm → Used to compute gcd(a, b).
// Recursion → The gcd function calls itself until b becomes 0.
// Mathematical Formula for LCM → (a * b) / gcd(a, b)

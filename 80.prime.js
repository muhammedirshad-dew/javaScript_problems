//Check prime number?
//Prime numbers are natural numbers that are divisible by only 1 and the number itself.
// For example: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, etc. are prime numbers.

function checkPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Example usage:
let num = 23;
if (checkPrime(num)) {
  console.log(num + " is a prime number");
} else {
  console.log(num + " is not a prime number");
}
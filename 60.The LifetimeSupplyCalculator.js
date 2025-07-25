///The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
//  outputs the result to the screen like so: 
//"You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day,
// and round the result to a round number.

function calculateSupply(age, lays) {
    const maxAge = 100;
    const totalNeeded = (lays * 365) * (maxAge - age);
    const totalAmount = totalNeeded * 10;
    console.log(`You will need ${totalNeeded} lays chips to last you until the ripe old age of ${maxAge}.`);
    console.log(`That will cost you ${totalAmount} rupees.`);
  }
  
  // Example usage:
  calculateSupply(30, 2);
  calculateSupply(50, 1);
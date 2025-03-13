//Function to calculate
function interest(principal, time, rate) {
  //calculate simple interest using the formula:
  let simpleInterest = (principal * time * rate) / 100;

  //print the result
  console.log("simple Interest is :", simpleInterest);
}

//call the function with sample value
interest(1000, 2000, 5); //Assuming rate is 5%

// Explanation:
// principal: The initial amount of money.
// rate: The annual interest rate (as a percentage).
// time: The time period for which the money is invested/borrowed (in years).
// The function returns the calculated simple interest based on the formula:
// Simple Interest
// =
// Principal
// ×
// Rate
// ×
// Time
// 100
// Simple Interest=
// 100
// Principal×Rate×Time

//The Simple Interest for 2 years on a principal of 1000 Rupees at an annual interest rate of 5% will be 100 Rupees.

//So, after 2 years, you'll earn 100 Rupees as interest on the initial investment of 1000 Rupees. ​

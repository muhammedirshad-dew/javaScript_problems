//An Armstrong number is a number that is equal to the sum of its own digits,
//  each raised to the power of the number of digits in the number.
// For example, 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153.

// Program to checck an Armstrong number of three digits


let sum = 0;
const number = 153;

// create a temporary variable 

let temp = number;

while(temp > 0){
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing the one's digit from the number
    temp = parseInt(temp / 10); // convert float to integer
}
// check the condition


if(sum == number){
    console.log(`${number} is an Armstrong number`);
}
else{
    console.log(`${number} is not an Armstrong number.`);
}






// importent
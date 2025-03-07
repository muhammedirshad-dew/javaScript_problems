// find highest common factor hcf(12,36)

let num1 = 12 ;
let num2 = 36 ;
let hcf;

for (let i = 1; i <= num1; i++){
    if (num1 % i == 0 && num2 % i == 0) {
        hcf = i ; //the largest i that satisfies the condition is the hcf
}
}
console.log(hcf)



// Understanding the Loop
// The loop runs from i = 1 to i = num1 (12).
// The condition if (num1 % i == 0 && num2 % i == 0) 
// checks if i is a common factor of both num1 and num2.
// If the condition is true, hcf is updated to i.
//  The last value assigned to hcf will be the HCF.



// Iteration	Value of i	num1 % i == 0	num2 % i == 0	Condition Met?	hcf Updated?
// 1	    1	✅ (12 % 1 == 0)	✅ (36 % 1 == 0)	✅ Yes	hcf = 1
// 2	    2	✅ (12 % 2 == 0)	✅ (36 % 2 == 0)	✅ Yes	hcf = 2
// 3	    3	✅ (12 % 3 == 0)	✅ (36 % 3 == 0)	✅ Yes	hcf = 3
// 4	    4	✅ (12 % 4 == 0)	✅ (36 % 4 == 0)	✅ Yes	hcf = 4
// 5	    5	❌ (12 % 5 != 0)	❌ (36 % 5 != 0)	❌ No	No change
// 6	    6	✅ (12 % 6 == 0)	✅ (36 % 6 == 0)	✅ Yes	hcf = 6
// 7	    7	❌ (12 % 7 != 0)	❌ (36 % 7 != 0)	❌ No	No change
// 8	    8	❌ (12 % 8 != 0)	❌ (36 % 8 != 0)	❌ No	No change
// 9	    9	❌ (12 % 9 != 0)	❌ (36 % 9 != 0)	❌ No	No change
// 10	    10	❌ (12 % 10 != 0)	❌ (36 % 10 != 0)	❌ No	No change
// 11	    11	❌ (12 % 11 != 0)	❌ (36 % 11 != 0)	❌ No	No change
// 12	    12	✅ (12 % 12 == 0)	✅ (36 % 12 == 0)	✅ Yes	hcf = 12



// //find Highest common factor hcf(12,36)

// let num1=12;
// let num2=36;
// let hcf;
// for(let i=1;i<=num1;i++){
//     if(num1%i==0 &&num2% i ==0){
//         hcf=i; //the largest i that satisfies the condition is the HCF
//     }
// }
// console.log(hcf);

// // Understanding the Loop
// // The loop runs from i = 1 to i = num1 (12).
// // The condition if (num1 % i == 0 && num2 % i == 0) 
// // checks if i is a common factor of both num1 and num2.
// // If the condition is true, hcf is updated to i.
// //  The last value assigned to hcf will be the HCF.



// // Iteration	Value of i	num1 % i == 0	num2 % i == 0	Condition Met?	hcf Updated?
// // 1	    1	✅ (12 % 1 == 0)	✅ (36 % 1 == 0)	✅ Yes	hcf = 1
// // 2	    2	✅ (12 % 2 == 0)	✅ (36 % 2 == 0)	✅ Yes	hcf = 2
// // 3	    3	✅ (12 % 3 == 0)	✅ (36 % 3 == 0)	✅ Yes	hcf = 3
// // 4	    4	✅ (12 % 4 == 0)	✅ (36 % 4 == 0)	✅ Yes	hcf = 4
// // 5	    5	❌ (12 % 5 != 0)	❌ (36 % 5 != 0)	❌ No	No change
// // 6	    6	✅ (12 % 6 == 0)	✅ (36 % 6 == 0)	✅ Yes	hcf = 6
// // 7	    7	❌ (12 % 7 != 0)	❌ (36 % 7 != 0)	❌ No	No change
// // 8	    8	❌ (12 % 8 != 0)	❌ (36 % 8 != 0)	❌ No	No change
// // 9	    9	❌ (12 % 9 != 0)	❌ (36 % 9 != 0)	❌ No	No change
// // 10	    10	❌ (12 % 10 != 0)	❌ (36 % 10 != 0)	❌ No	No change
// // 11	    11	❌ (12 % 11 != 0)	❌ (36 % 11 != 0)	❌ No	No change
// // 12	    12	✅ (12 % 12 == 0)	✅ (36 % 12 == 0)	✅ Yes	hcf = 12
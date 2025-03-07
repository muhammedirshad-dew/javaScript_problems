// find total expense
// find maximum amount
// find minimum amount


let expense = [12000,20000,30000,25000,17000,10000];
let total = 0 ;
let maxexp = 0;
let minexp = expense[0];


for (let amount of expense) {
    total += amount;

    // calculate maximum
    if (maxexp < amount) {
        maxexp = amount;
    }

    // calculate minimum
    if(amount < minexp) {
        minexp = amount;
}
}
console.log("Total amount", total);
console.log("minimum amount", maxexp);


// console.log ("maximum amount",Math.max(12000,20000,30000,25000,17000,10000));
// console.log("minimum amount",Math.min(12000,20000,30000,25000,17000,10000))
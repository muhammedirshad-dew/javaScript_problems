// find the second largest number 

function findSecondLargest(arr){
    const max = Math.max(...arr);
    const secondMax = Math.max(...arr.filter(x => x !== max));
    return secondMax;
} 

const arr = [12,35,1,10,34,1];
console.log(findSecondLargest(arr));
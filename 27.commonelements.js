// Function to find common elements in 3 sorted arrays

function commonElements(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}

const arr1 = [1,2,3,4,5];
const arr2 = [4,5,6,7,8];



console.log(commonElements(arr1, arr2));
function removedup(arr) {
  return [...new Set(arr)];
}

const origarray = [1, 3, 3, 4, 5, 2, 2];

const uniqarray = removedup(origarray);

console.log(uniqarray);

//   new Set(arr):
// The Set object is a built-in JavaScript data structure that stores only unique values.
// When we pass an array (arr) into Set, it automatically removes duplicate values.
// Output: Set { 1, 2, 3, 4, 5, 6 }

// [...new Set(arr)]:
// The spread operator (...) is used to convert the Set back into an array.
// This is necessary because Set is not an array by default, and we need an array as the output.

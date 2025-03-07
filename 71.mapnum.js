///till 5 output =number -1....then ||number +1
//ternary operator

a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var mapping = a.map((a) => (a < 5 ? a - 1 : a + 1));

console.log(mapping);

// importent



// JavaScript program to print cross numbers pattern

function printCrossNumberPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (i == j || i + j == n + 1) {
        row += i + " ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

printCrossNumberPattern(5)



// Code Breakdown:
// The function printCrossPattern(n) takes an integer n as input.
// It iterates through a nested loop to construct each row of the pattern.
// If the current indices (i, j) satisfy:
// i == j (for the main diagonal)
// i + j == n + 1 (for the secondary diagonal) Then, 
// it adds the row number (i) at that position.
// Otherwise, it appends a space.
// Finally, the constructed row is printed.
// Iteration-wise Execution (For n = 5):

// n = 5



// Iteration 1 (i = 1)
// j = 1 → (1,1) → i == j → Print "1"
// j = 2 → (1,2) → No match → Print " "
// j = 3 → (1,3) → No match → Print " "
// j = 4 → (1,4) → No match → Print " "
// j = 5 → (1,5) → i + j == n+1 → Print "1"
// Row printed:
// 1 1




// Iteration 2 (i = 2)
// j = 1 → (2,1) → No match → Print " "
// j = 2 → (2,2) → i == j → Print "2"
// j = 3 → (2,3) → No match → Print " "
// j = 4 → (2,4) → i + j == n+1 → Print "2"
// j = 5 → (2,5) → No match → Print " "
// Row printed:
// 2 2



// Iteration 3 (i = 3)
// j = 1 → (3,1) → No match → Print " "
// j = 2 → (3,2) → No match → Print " "
// j = 3 → (3,3) → i == j → Print "3"
// j = 4 → (3,4) → No match → Print " "
// j = 5 → (3,5) → No match → Print " "
// Row printed:
// 3



// Iteration 4 (i = 4)
// j = 1 → (4,1) → No match → Print " "
// j = 2 → (4,2) → i + j == n+1 → Print "4"
// j = 3 → (4,3) → No match → Print " "
// j = 4 → (4,4) → i == j → Print "4"
// j = 5 → (4,5) → No match → Print " "
// Row printed:
// 4 4


// Iteration 5 (i = 5)
// j = 1 → (5,1) → i + j == n+1 → Print "5"
// j = 2 → (5,2) → No match → Print " "
// j = 3 → (5,3) → No match → Print " "
// j = 4 → (5,4) → No match → Print " "
// j = 5 → (5,5) → i == j → Print "5"
// Row printed:
// 5 5



// Final Output:
// Copy
// Edit
// 1   1
//  2 2 
//   3  
//  4 4 
// 5   5

// This forms a cross pattern,
//  with numbers printed 
// at the main diagonal (i == j) and 
// secondary diagonal (i + j == n + 1).
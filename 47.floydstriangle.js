//floydstriangle
//this pattern is a number pyramid

let i,
  j,
  k = 1,
  n = 5,
  string = "";
for (i = 1; i <= n; i++) {
  for (j = 1; j <= i; j++) {
    string = string + k;
    //console.log(k)
  }
  string = string + "\n";
}
console.log(string);

// 1
// 23
// 456
// 78910
// 1112131415

// Initialization:

// i, j, k = 1, n = 5, string = ""
// k = 1 (used to store numbers to be printed)
// n = 5 (number of rows)
// string = "" (stores the final pattern)
// Outer loop (i) controls the number of rows (i ranges from 1 to n).

// Inner loop (j) runs i times in each iteration, appending k to string and incrementing k.

// Iteration Breakdown:

// Iteration 1 (i = 1):
// j runs from 1 to 1:
// k = 1 → string = "1"
// k is incremented (k = 2)
// Append "\n" to string.
// string becomes:

// 1

// Iteration 2 (i = 2):
// j runs from 1 to 2:
// k = 2 → string = "1\n2"
// k = 3 → string = "1\n23"
// k is incremented (k = 4)
// Append "\n" to string.
// string becomes:

// 1
// 23

// Iteration 3 (i = 3):
// j runs from 1 to 3:
// k = 4 → string = "1\n23\n4"
// k = 5 → string = "1\n23\n45"
// k = 6 → string = "1\n23\n456"
// k is incremented (k = 7)
// Append "\n" to string.
// string becomes:

// 1
// 23
// 456

// Iteration 4 (i = 4):
// j runs from 1 to 4:
// k = 7 → string = "1\n23\n456\n7"
// k = 8 → string = "1\n23\n456\n78"
// k = 9 → string = "1\n23\n456\n789"
// k = 10 → string = "1\n23\n456\n78910"
// k is incremented (k = 11)
// Append "\n" to string.
// string becomes:

// 1
// 23
// 456
// 78910

// Iteration 5 (i = 5):
// j runs from 1 to 5:
// k = 11 → string = "1\n23\n456\n78910\n11"
// k = 12 → string = "1\n23\n456\n78910\n1112"
// k = 13 → string = "1\n23\n456\n78910\n111213"
// k = 14 → string = "1\n23\n456\n78910\n11121314"
// k = 15 → string = "1\n23\n456\n78910\n1112131415"
// k is incremented (k = 16)
// Append "\n" to string.
// string becomes:

// 1
// 23
// 456
// 78910
// 1112131415

// Final Output:

// 1
// 23
// 456
// 78910
// 1112131415
// This pattern is a number pyramid, where each row contains increasing numbers in a continuous sequence.

// hourglass pattern program

const n=5;
let str='';

//Upper Half
for (let i=1;i<n;i++){
    let row ='';
    for (let j=1;j<=2*n-1;j++){
        if (j>=i && j<=2*n-i){
            row += '*';
        } else{
            row += ' ';
        }
    }
    str += row + '\n';
}

//lower half

for (let i = n - 1;i >=1; i--) {
  let row = '';
  for (let j = 1; j <= 2 * n - 1; j++) {
    if (j >= i && j <= 2 * n - i) {
      row += "*";
    } else {
      row += " ";
    }
  }
  str += row + "\n";
}

console.log(str);


// The upper half consists of n rows (5 in this case).
// The lower half consists of n-1 rows (4 in this case).
// Each row contains 2*n - 1 characters (9 in this case).
// Asterisks (*) appear in a shrinking pattern 
// for the upper half and in an expanding pattern for the lower half.



// Step-by-Step Iteration Analysis
// Upper Half Iteration
// We iterate i from 1 to n (1 to 5).

// First Iteration (i = 1)
// j iterates from 1 to 9 (2*n - 1).
// if (j >= 1 && j <= 9): This is always true, so row = "*"
// str = "*\n"

// Second Iteration (i = 2)
// j iterates from 1 to 9.
// if (j >= 2 && j <= 8): Stars from column 2 to 8, spaces elsewhere.
// row = " ******* "
// str = "*\n ******* \n"

// Third Iteration (i = 3)
// j iterates from 1 to 9.
// if (j >= 3 && j <= 7): Stars from column 3 to 7, spaces elsewhere.
// row = " ***** "
// str = "*\n ******* \n ***** \n"

// Fourth Iteration (i = 4)
// j iterates from 1 to 9.
// if (j >= 4 && j <= 6): Stars from column 4 to 6, spaces elsewhere.
// row = " *** "
// str = "*\n ******* \n ***** \n *** \n"

// Fifth Iteration (i = 5)
// j iterates from 1 to 9.
// if (j >= 5 && j <= 5): Star at column 5, spaces elsewhere.
// row = " * "
// str = "*\n ******* \n ***** \n *** \n * \n"


// Lower Half Iteration
// Now, we iterate i backwards from n-1 to 1 (4 to 1).

// First Iteration (i = 4)
// j iterates from 1 to 9.
// if (j >= 4 && j <= 6): Stars from column 4 to 6.
// row = " *** "
// str = "*\n ******* \n ***** \n *** \n * \n *** \n"

// Second Iteration (i = 3)
// j iterates from 1 to 9.
// if (j >= 3 && j <= 7): Stars from column 3 to 7.
// row = " ***** "
// str = "*\n ******* \n ***** \n *** \n * \n *** \n ***** \n"

// Third Iteration (i = 2)
// j iterates from 1 to 9.
// if (j >= 2 && j <= 8): Stars from column 2 to 8.
// row = " ******* "
// str = "*\n ******* \n ***** \n *** \n * \n *** \n ***** \n ******* \n"

// Fourth Iteration (i = 1)
// j iterates from 1 to 9.
// if (j >= 1 && j <= 9): This is always true, so row = "*"
// str = "\n ******* \n ***** \n *** \n * \n *** \n ***** \n ******* \n\n"


// Final Output

// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********
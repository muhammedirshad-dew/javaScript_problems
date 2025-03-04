//  number,district,+ve cases,death rate,cured rate,1st dose vaccine,2nd dose vaccine.

covid_data = [
  [1, "ernakulam", 34000, 2000, 23000, 20000, 2000],
  [2, "thrissur", 37000, 4000, 21000, 10000, 1000],
  [3, "waynad", 43000, 500, 30430, 80000, 8000],
  [4, "calicut", 22000, 7500, 31430, 60000, 14000],
  [5, "kannur", 20200, 1500, 43000, 10002, 74000],
  [6, "tvm", 50000, 17500, 80430, 89000, 94000],
];


// district having highest +ve cases

a= covid_data.reduce((d1,d2)=> d1[2] > d2[2] ? d1 : d2);
console.log(a[1])




// district having highest first dose vaccine

b= covid_data.reduce((d1,d2)=> d1[5] > d2[5] ? d1 : d2);
console.log(b[1])


// district having lowest death rate
c= covid_data.reduce((d1,d2)=> d2[3] > d1[3] ? d1 : d2);
console.log(c[1])




// sort data with +ve cases in descending order
covid_data.sort((a,b)=> b[2] - a[2]);
console.log(covid_data);

// districts with +ve case is < 30000
d = covid_data.filter((d)=> d[2] < 30000);
console.log(d);


//sort data with first dose vaccine 
covid_data.sort((a,b)=> a[5] - b[5]);
console.log(covid_data);


// print thrissur details
console.log(covid_data.filter(e => e[1] == "thrissur"));


// print total number of +ve cases 
console.log(covid_data.reduce((a,b) => a+b[2],0));

///a (Accumulator): Holds the total sum of positive cases.
//  b (Current Element): Represents the current district data array.
//  b[2]: Extracts the positive case count from each district’s data.
//  0 (Initial Value): The starting value for the accumulator a.



////step-by-Step Execution

//Initial value of a = 0
//First iteration: a = 0 + 34000 → a = 34000
// Second iteration: a = 34000 + 37000 → a = 71000
// Third iteration: a = 71000 + 43000 → a = 114000
//Fourth iteration: a = 114000 + 22000 → a = 136000
// Fifth iteration: a = 136000 + 20200 → a = 156200
// Sixth iteration: a = 156200 + 50000 → a = 206200


// print total number of +ve cases

console.log(covid_data.reduce((a,b) => a+b[2],0));



// print total number of -ve cases
console.log(covid_data.reduce((a,b) => a+b[3],0));


// print total number of cured cases
console.log(covid_data.reduce((a,b) => a+b[4],0));


// find cured cases in tvm
console.log(covid_data.filter(e => e[1] == "tvm")[0][4]);


///covid_data.filter(e => e[1] == 'tvm')

//Filters the covid_data array to find the row where the second column 
// (district name) is 'tvm'.

//[[6, 'tvm', 50000, 17500, 80430, 89000, 94000]]
//covid_data.filter(e => e[1] == 'tvm')[0]

//Gets the first (and only) matching row from the filtered result:

//[6, 'tvm', 50000, 17500, 80430, 89000, 94000]
//covid_data.filter(e => e[1] == 'tvm')[0][4]

//Extracts the 5th element (index 4) from this row, which is the cured cases:
//80430
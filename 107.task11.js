rainfall_data = [
  [1, "ernakulam", 300, 20, 80, 200, 50],
  [2, "thrissur", 400, 15, 60, 180, 40],
  [3, "waynad", 500, 10, 70, 220, 55],
  [4, "calicut", 250, 25, 90, 190, 35],
  [5, "kannur", 320, 18, 65, 210, 45],
  [6, "tvm", 480, 22, 75, 230, 60],
];

//Columns:
//District Number
//District Name
//Total Rainfall (in mm)
//Rainy Days
//Sunny Days
//Rainfall in First Half of the Year (mm)
//Rainfall in Second Half of the Year (mm)

//1-which district has the highest rainfall
a = rainfall_data.reduce((d1, d2) => (d1[2] > d2[2] ? d1 : d2));
console.log("Highest rainfall:", a[1]);

//2-which district has the highest total rainfall in first half year

a1 = rainfall_data.reduce((d1, d2) => (d1[5] > d2[5] ? d1 : d2));
console.log(
  "district has the highest total rainfall in first half year:",
  a1[1]
);

//3-which district has the lowest number of rainy days
a2 = rainfall_data.reduce((d1, d2) => (d1[3] < d2[3] ? d1 : d2));
console.log("district has the lowest number of rainy days:", a2[1]);

//4-sort the data by total rainfall in descending order
rainfall_data.sort((a, b) => b[2] - a[2]);
console.log("data by total rainfall in descending order:", rainfall_data);

//5-list the districts where total rainfall is less than 300mm
d = rainfall_data.filter((d) => d[2] < 300);
console.log("the districts where total rainfall is less than 300mm:", d);

//6-print the details about thrissur
console.log(rainfall_data.filter((a) => a[1] == "thrissur"));

//7-print total number of rainy days  across all districts
console.log(rainfall_data.reduce((a, b) => a + b[3], 0));

//print the total number of sunny days across a;l districts
console.log(rainfall_data.reduce((a, b) => a + b[4], 0));

//8-print the rainfall for the second half of the year across all districts
console.log(rainfall_data.reduce((a, b) => a + b[2], 0));

//9-find the number of sunny days in tvm
console.log(rainfall_data.filter((d) => d[1] == "tvm").map((a) => a[4]));

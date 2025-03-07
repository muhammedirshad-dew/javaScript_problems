let employee = [
  ["1000", "nikhil", "developer"],
  ["1252", "anil", "tester"],
  ["1008", "aju", "support"],
  ["2000", "karthika", "developer"],
];
// print details of employee whose designation is developer

let filt = employee.filter((num) => num[2] === "developer");
console.log(filt);

// print details of employee whose id is 1008

let filt1 = employee.filter((num) => num[0] == "1008");
console.log(filt1);

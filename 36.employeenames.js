// print employee name


let employees = [
  ["1000", "nikhil", "developer"],
  ["1252", "anil", "tester"],
  ["1008", "aju", "support"],
  ["2000", "karthika", "developer"],
];
 
const names = employees.map(employee => employee[1]);
console.log(names);

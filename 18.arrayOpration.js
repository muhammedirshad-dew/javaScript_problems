let array =['sleep','work','exercise',];

let newarray =['eat'];



//short
array.sort();
console.log(array);





//index of 
const position = array.indexOf('work');
console.log("position",position);




//slice 
const newwarray = array.slice(1,3);
console.log("slice",newwarray);





//concat
const routine = array.concat(newarray);
console.log("concat",routine);



//splice
const fruits= ['apple', 'banana', 'orange', 'grapes', 'mango'].splice(2,2);
console.log(fruits);



//find
abc = [1,2,3,4,5,6,7,8,9,10]
const found = abc.find(element => element > 5); //first element greater than 5
                               // < 5 first element less than 5

console.log(found);
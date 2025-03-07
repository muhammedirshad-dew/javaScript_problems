//find the largest id from array object

const arr = [{ id: 1 }, { id: 7 }, { id: 3 }, { id: 14 }];
const ids = arr.map((object) => {
  return object.id;
});
console.log(ids); //[1,7,3,14]

const max = Math.max(...ids);
console.log("largest is ", max); //14

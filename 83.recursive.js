let counter = 0;

function printHello() {
  console.log("hello");
  counter++;
  console.log(counter);

  if (counter < 4) {
    printHello();
  }
  return;
}
printHello();
//the function calls itself untill the counter reaches 4.

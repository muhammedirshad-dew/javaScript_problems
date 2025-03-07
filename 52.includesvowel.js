//print all vowels in  a sentences using includes

str = "hai HELLO";
vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
console.log(
  Array.from(str)
    .filter((e) => vowels.includes(e))
    .forEach((e) => {
      console.log("vowels are ", e);
    })
);

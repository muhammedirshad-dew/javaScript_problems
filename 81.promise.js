// Promise in JavaScript

//It has two possible outcomes - resolve for succes and reject for failure

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false;
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Error: Unable to fetch data!");
    }
  }, 2000);
});

myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

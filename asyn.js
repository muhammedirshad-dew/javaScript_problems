// Promise-bassed Asynchronous functions

const asyncFunction = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Asyncchronous task complited");
    }, 2000);
  });
};

// usage of async function
(async () => {
  try {
    const result = await asyncFunction();
    console.log(result);
  } catch (err) {
    console.error("Error:", err);
  }
})();

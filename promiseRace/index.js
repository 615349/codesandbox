const promiseA = () =>
  new Promise(resolve => setTimeout(() => resolve("A"), 200));

const promiseB = () =>
  new Promise((_, reject) => {
    setTimeout(() => reject("Timed out"), 100);
  });

// Apply a timeout of 5 seconds to doSomething
Promise.race([promiseA(), promiseB()])
  .then(response => {
    // Use response
    console.log("then:", response);
  })
  .catch(error => {
    // Deal with error
    console.log("catch:", error);
  });

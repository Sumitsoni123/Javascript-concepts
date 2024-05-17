const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 1 resolved");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 2 resolved");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 3 resolved");
  }, 1500);
});

// promise.all returns an array of their results iff all promises resolved else return reject
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("Error in Promise.all:", error);
  });

// Promise.race function in JavaScript is used to wait for the first Promise to resolve or reject among multiple Promises.promise.race will return resolve/reject whichever prmise is settled first
Promise.race([promise1, promise2, promise3])
  .then((results) => {
    console.log("The fastest Promise resolved:", results);
  })
  .catch((error) => {
    console.error("Error in Promise.race:", error);
  });

// The Promise.allSettled function in JavaScript is used to wait for all Promises in an array to settle, whether they resolve or reject, and then returns an array of objects representing the status of each Promise
Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    console.log("All Promises settled:", results);
  })
  .catch((error) => {
    console.error("Error in Promise.allSettled:", error);
  });

// The Promise.any fn us used to wait for first promise which gets resolved and if all fails then we get AggregateError
Promise.any([promise1, promise2, promise3])
  .then((results) => {
    console.log("This Promise resolved:", results);
  })
  .catch((error) => {
    console.error("None resolved Promise.any:", error);
  });

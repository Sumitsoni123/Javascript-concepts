// sync programming using callbacks

function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

doOperation();

// async programming using promises and try-catch

function doStep1(init) {
  return new Promise((resolve) => {
    const result = init + 1;
    resolve(result);
  });
}

function doStep2(init) {
  return new Promise((resolve) => {
    const result = init + 2;
    resolve(result);
  });
}

function doStep3(init) {
  return new Promise((resolve) => {
    const result = init + 3;
    resolve(result);
  });
}

async function doOperation() {
  try {
    let result1 = await doStep1(0);
    let result2 = await doStep2(result1);
    let result3 = await doStep3(result2);
    console.log(`result: ${result3}`);
  } catch (error) {
    console.error(error);
  }
}

doOperation();

// always returns promise
async function getData() {
  return "Sumit";
}

getData().then((res) => console.log(res));

// await can only be used inside async function and it waits for promise to get resolved before moving to next line
const p1 = new Promise((resolve, rejected) => {
  setTimeout(() => {
    resolve("promise-1 resolved successfully");
  }, 10000);
});

const p2 = new Promise((resolve, rejected) => {
  setTimeout(() => {
    resolve("promise-2 resolved successfully");
  }, 2000);
});

// in below, console will be printed first and promise after it resolved
async function fn1() {
  p1.then((res) => console.log(res));
  console.log("namaste");
}

// in below fn call, console will wait for the val to get resolved
// if promise p2 gets resolved before p1, as soon as p1 resolved both will be printed simultaneously
// if promise p1 gets resolved before p2, it will be printed and p2 will wait till it gets resolved
// fn2 execution gets suspended till promise resolved, and callstack is empty so as to accomodate other operation
async function fn2() {
  const val1 = await p1;
  console.log("Namaste-1 Javascript");
  console.log(val1);

  const val2 = await p2;
  console.log("Namaste-2 Javascript");
  console.log(val2);
}
fn2();

// fetch returns promise which after resolve will give response
// that resonse had readable stream which need to be converted to json
// converting to json using res.json() will again return promise which after resolve yeilds actual data

const API = "https://api.github.com/users/Sumitsoni123";

async function fetchData() {
  try {
    const res = await fetch(API);
    const jsonValue = await res.json();
    console.log(jsonValue);
  } catch (error) {
    console.log(error);
  }
}
fetchData();

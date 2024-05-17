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

// below is the example for callback hell where inner fn is dependent and triggered by outer fn
// issues with callback are:- callback hell, inversion of control
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

// to avoid above issue, we use promise object which is immutable once resolved
// attaching callback fn to promise obj is better than passing it to another fn as args
// callbacks could have been called multiple times but only once inside promise obj
function doStep1(init) {
  return new Promise((resolve, reject) => {
    const result = init + 1;
    resolve(result);
  });
}

function doStep2(init) {
  return new Promise((resolve, reject) => {
    const result = init + 2;
    resolve(result);
  });
}

function doStep3(init) {
  return new Promise((resolve, reject) => {
    const result = init + 3;
    resolve(result);
  });
}

function doOperation() {
  doStep1(0)
    .then((result1) => doStep2(result1))
    .then((result2) => doStep3(result2))
    .then((result3) => {
      console.log(`result: ${result3}`);
    })
    .catch((error) => {
      console.error(error);
    });
}

doOperation();

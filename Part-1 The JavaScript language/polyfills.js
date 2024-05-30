// polyfill of map

let arr = [1, 2, 3, 4, 5];

function polyfillMap(arr, cb) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    ans.push(cb(arr[i]));
  }
  return ans;
}

function square(x) {
  return x * x;
}
console.log(polyfillMap(arr, square));

// polyfill of filter

function polyfillFilter(arr, cb) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      ans.push(arr[i]);
    }
  }
  return ans;
}

function checkOdd(x) {
  if (x % 2) return x;
}

console.log(polyfillFilter(arr, checkOdd));

// polyfill of reduce

function polyfillReduce(arr, cb, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : arr[0];
  for (let i = initialValue !== undefined ? 0 : 1; i < arr.length; i++) {
    accumulator = cb(accumulator, arr[i]);
  }
  return accumulator;
}

function getSum(accumulator, currentValue) {
  return accumulator + currentValue;
}

console.log(polyfillReduce(arr, getSum, 0)); // Output: 15

// Polyfill of bind function

let person1 = {
  name: "Shibbi",
  age: 26,
};

function showDetails(city) {
  console.log(`${this.name} is ${this.age} yrs old and lives in ${city}`);
}

Function.prototype.myBind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let fn = showDetails.myBind(person1, "bangalore");
fn();

// Polyfill of setInterval

function createSetInterval() {
  let intervalId = 0;
  let intervalMap = {};

  function setIntervalPolyfill(callback, delay = 0, ...args) {
    var id = intervalId++;

    function repeat() {
      intervalMap[id] = setTimeout(() => {
        callback(...args);

        if (intervalMap[id]) {
          repeat();
        }
      }, delay);
    }
    repeat();
    return id;
  }

  function clearIntervalPolyfill(intervalId) {
    clearTimeout(intervalMap[intervalId]);
    delete intervalMap[intervalId];
  }

  return {
    setIntervalPolyfill,
    clearIntervalPolyfill,
  };
}

const { setIntervalPolyfill, clearIntervalPolyfill } = createSetInterval();

let counter = 0;
let intervalId;

function greeting() {
  counter++;
  console.log("hii");

  if (counter >= 3) {
    clearIntervalPolyfill(intervalId);
  }
}

intervalId = setIntervalPolyfill(greeting, 3000)
// prototype of map function

let arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i]));
  }

  return newArr;
};

function square(x) {
  return x * x;
}

console.log(arr.myMap(square));

// prototype of filter

Array.prototype.myFilter = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) newArr.push(this[i]);
  }

  return newArr;
};

function isEven(x) {
  return x % 2 === 0;
}

console.log(arr.myFilter(isEven));

// prototype of reduce function

Array.prototype.myReduce = function (cb, initialValue) {
  let result = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    result = cb(result, this[i]);
  }

  return result;
};

function getSum(sum, x) {
  return sum + x;
}

console.log(arr.myReduce(getSum));

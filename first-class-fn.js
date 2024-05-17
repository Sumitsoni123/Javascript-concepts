// difference between expression and statement is hoisting
// fn1();
// a();     // we will get err a is not a function

// function statement aka function declaration
function fn1() {
  console.log("fn statement");
}

// function expression
var a = function fn2() {
  console.log("fn expression");
};

// Anonymous function are fns with no name and to be used as function expression
let s = function () {
  console.log("Im anonymous function");
};

// named function expression
var a = function fn2() {
    console.log("fn expression");
}

// difference between parameter and arguments - 
// the vars we pass during fn declaration is params and value we pass during fn call is args

// first class function/ first class citizen - 
// ability to use functions as variables 
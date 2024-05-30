# functions are treated as first class citizen bcoz 

1. it can be treated as variable
const temp = function () {
    console.log("Im an expression")
    console.log("Im an anonymous function")
}
temp()

2. function can be passed as param (callbacks)
function sayHello(param) {
    console.log("hello", param)
    param()
    return "snnfns";
}

function smaller() {
    console.log("innner func")
}

let rVal = sayHello(smaller);
console.log(rVal)

3. function can return another function
function outer() {
    console.log("im outer func")
    return function inner() {
        console.log("inner func")
    }
}

# IIFE (invoked itself)
(function fn() {
    console.log("im an IIFE")
})();

# arrow function
let fn = (num) => {
    return num*num
}
console.log(fn(5)) -->> 25
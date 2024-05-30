# Functional programming is a paradigm of building computer programs using expressions and functions without mutating state and data.
# functional programming aims to write code that is clearer to understand and more bug resistant.
# decalrative way of writing code is used.


# 1. pure vs impure functions 

// exapmle of impure fn
let a=10

function fn(b) {
    console.log(a+b)
}
fn()

here fn output depends on global var a that if changed yields diff output for same args passed to fn
so this is called impure function

// example of pure fn
function fn(a, b) {
    console.log(a+b)
}
fn(2, 4) 

here above will yield fix output for 2, 4 as args everytime


# 2. Immutability 

const obj1 = {
    name: "Sumit",
    age: 21
}

const obj2 = obj1;       // shallow copy
const obj2 = {...obj1};  // deep copy

console.log(obj1)
console.log(obj2)


# 3. map, filter, reduce function

const arr = [1, 2, 3, 4, 5]

// map fn
const newArr1 = arr.map(x => x*x)

// filter fn
const newArr2 = arr.filter(x => x%2 === 0)

// reduce fn
const newArr3 = arr.reduce((sum, x) => sum+x, 0)


console.log(newArr1)    // 2, 4, 9, 16, 25
console.log(newArr2)    // 2, 4
console.log(newArr3)    // 15

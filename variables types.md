# var keyword has functional scope. It can be reassigned, redecalred but memroy is allocted once only

console.log("1st- ", varName)
var varName

varName = 10
console.log("2nd- ", varName)

// reassign
varName = 20
console.log("3rd- ", varName)

var varName                     // memory is already allocated for this variable
console.log("4th- ", varName)  

output ->> undefined, 10, 20, 20


# let and const keywords has block scope.
# let can be reassigned but cant be redeclared. const has to be assigned and decalred at the same time.
# temporal dead zone is a area of block where a variable is inaccessible until the moment the computer completely initilizes with a value.

console.log("hello")
console.log(varName)
let varName;
console.log(varName)
varName = 10;
varName = 20;
console.log(varName)

const a = 10
output ->> hello then error saying cannot access varName before initialized


let fruits = "apple"
console.log(fruits)
{
    let fruits;
    console.log(fruits)
    fruits = "orange"
    {
        console.log(fruits)
    }
    console.log(fruits)
}
console.log(fruits)

output ->> apple, undefined, orange, orange, apple

# illegal Shadowing the variables declared with let and const in same scope is illegal.

let a = 10;
if(true) {
    var a = 10;
}

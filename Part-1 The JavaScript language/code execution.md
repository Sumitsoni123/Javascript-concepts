# Javascript code runs in execution context which has global variable and this variable provided by javascript
# Nodejs gives -> global obj and this as {}
# Browser gives -> windows obj and this equals windows obj
# Before code runs in exe context, memory gets allocated and undefined assigned to var, called hoisting

console.log(a)  // undefined
var a
console.log(a)  // undefined
a = 10
console.log(a)  // 10


# In case of Function, memory gets allocated before code runs in heap and ref gets stored in stack
fn()
function fn() {
    console.log("i can be called before my declaration")
}
fn()

output:
i can be called before my declaration
i can be called before my declaration


function real() {
    console.log("im real")
}
function real() {
    console.log("no, im real")
}
function real() {
    console.log("Both are wasted")
}
real()

output: 
Both are wasted (memory allocated before runtime for same fn name and last one will be run)



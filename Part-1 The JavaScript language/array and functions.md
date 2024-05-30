# in Js, everything acts as object. it is emulated as array bcoz there is no such array in Js

let arr = [1, 2, 3, 4, 5,]
arr.myProps = "hello"
arr.Print = function () {
    console.log("hello from array")
}

arr[90] = "hiii"
console.log(arr.length);  ->> 91
console.log(arr);        ->> 1, 2, 3, 4, 5, myProps: "hello", Print: [function (anonymous) ], ..., hiii

# function also acts as object.

function fn() {
    console.log("im a function")
}

fn.props = "im a fn props"
fn.myFn = function() {
    console.log("im a method of a function)
}

fn()                    ->> im a function
console.log(fn.props)   ->> im a fn props
fn.myFn()               ->> im a method of a function
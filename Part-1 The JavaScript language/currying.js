// currying using bind method
function add(a, b) {
    console.log(a+b);
}

let addWith2 = add.bind(this, 2)
addWith2(3)


// currying using closure method
function multiply(x) {
    return function(y) {
        console.log(x*y);
    }
}

let fn = multiply(3)
fn(4)


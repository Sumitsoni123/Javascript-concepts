# execution context is created inside call stack for code
# for Fn when called, there is memory allocted in heap and a separate EC is created on stack top 
# each EC has its own global, this and vars will be set to undefined


console.log("1st -",varName)
var varName = 20
console.log("2nd -",varName)
function fn() {
    console.log("3rd -",varName)
    var varName = 10;
    console.log("4th -",varName)
}
fn()  ->> unedfined, 20, undefined, 10

# if a fn has no var then it will look outside the fn where it has been defined irrespective from where it has been called

var varname = 10
function fn() {
    console.log(varname)
}
fn();

output ->> 10

# Globally scoped variables can be accessed from anywhere in the code, including within functions. These are the variables that are defined outside of any function.
# lexical scope is the fun scope to access the variables from the parent scope.
#  When a variable is accessed, Javascript first searches for it in the current scope, and if it's not found, it moves up the scope chain until the variable is found or the global scope is reached.
# This hierarchical structure determines the order in which Javascript looks for variables is called a Scope Chain.
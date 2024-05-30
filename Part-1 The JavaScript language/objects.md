1. Property existence test, “in” operator

# Please note that on the left side of in there must be a property name. That’s usually a quoted string.
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist


2. The "for..in" loop

# To walk over all keys of an object, there exists a special form of the loop: for..in.
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}


3. Ordered like an object

#  integer properties are sorted, others appear in creation order.
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}


# Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}


3. Object references and copying

# A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
# When an object variable is copied, the reference is copied, but the object itself is not duplicated.

let user = { name: "John" };
let admin = user; // copy the reference


let a = {};
let b = {}; // two independent objects
alert( a == b ); // false


# Using Lodash's cloneDeep -  handles more complex cases than the JSON method.
const _ = require('lodash');

const originalObj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};

const deepClone = _.cloneDeep(originalObj);


4. Garbage collection

# The main concept of memory management in JavaScript is reachability.
# Simply put, “reachable” values are those that are accessible or usable somehow. They are guaranteed to be stored in memory.
# There’s a background process in the JavaScript engine that is called garbage collector. It monitors all objects and removes those that have become unreachable.

let user = {
  name: "John"
};

if the value of user is overwritten, the reference is lost:
user = null

# Internal algorithms:- 
The basic garbage collection algorithm is called “mark-and-sweep”.

The following “garbage collection” steps are regularly performed:

The garbage collector takes roots and “marks” (remembers) them.
Then it visits and “marks” all references from them.
Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future.
…And so on until every reachable (from the roots) references are visited.
All objects except marked ones are removed.


5. Object methods, "this"

# Method shorthand 
// these objects do the same

user = {
  sayHi: function() {
    alert("Hello");
  }
};

// method shorthand looks better, right?
user = {
  sayHi() { // same as "sayHi: function(){...}"
    alert("Hello");
  }
};


# “this” in methods

let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  }

};

user.sayHi(); // John

# Technically, it’s also possible to access the object without this, by referencing it via the outer variable:
# …But such code is unreliable. If we decide to copy user to another variable, e.g. admin = user and overwrite user with something else, then it will access the wrong object.

let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert( user.name ); // leads to an error
  }

};


let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); //


# Arrow functions have no “this”
# Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.

let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya


6. Optional chaining

# The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.
let user = {}; // user has no address
alert( user?.address?.street ); // undefined (no error)


7. Symbol type

# By specification, only two primitive types may serve as object property keys: string type, or symbol type.
# Otherwise, if one uses another type, such as number, it’s autoconverted to string. So that obj[1] is the same as obj["1"], and obj[true] is the same as obj["true"].
# Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description, they are different values.


let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

# “Hidden” properties - Symbols allow us to create “hidden” properties of an object, that no other part of code can accidentally access or overwrite.

let user = { // belongs to another code
  name: "John"
};

let id = Symbol("id");
user[id] = 1;
alert( user[id] ); // we can access the data using the symbol as the key


# Symbolic properties do not participate in for..in loop.

let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert( "Direct: " + user[id] ); // Direct: 123



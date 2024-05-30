1. Methods of primitives

# There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.


2. Numbers

let billion = 1000000000;
let billion = 1_000_000_000;
let billion = 1e9;

1e-3 === 1 / 1000; // 0.001

# toString(base)
The method num.toString(base) returns a string representation of num in the numeral system with the given base.

let num = 255;
alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111


# Rounding

let num = 1.23456;
alert( Math.floor(num) ); // "1"
alert( Math.ceil(num) ); // "2"
alert( Math.trunc(num) ); // "1"

# Math.round and toFixed both round to the nearest number:
alert( Math.round(num) ); // 1
alert( num.toFixed(1) ); // "1.2"

# random numbers
function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

# parseInt and parseFloat
alert( +"100px" ); // NaN

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading


3. Strings

# Accessing characters
let str = `Hello world`;

// the first character
alert( str[0] );      // H
alert( str.at(0) );   // H


// the last character
alert( str[str.length - 1] );   // o
alert( str.at(-1) );


// iteration
for (let char of "Hello") {
  alert(char);              // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}


// str.indexOf
alert( str.indexOf("world") );   // 1


// to get all idx of occurances of target
let str = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}


# includes, startsWith, endsWith

alert( "Widget".includes("id") ); // true
alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"


# Getting a substring
There are 3 methods in JavaScript to get a substring: substring, substr and slice.

slice: Returns the part of the string from index start to end-1.

let str = "stringify";
alert( str.slice(0, 5) );    // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(2) );       // 'ringify', from the 2nd position till the end
alert( str.slice(-4, -1) );  // 'gif'


substring: This is almost the same as slice, but it allows start to be greater than end (in this case it simply swaps start and end values).

// these are same for substring
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"


substr: Returns the part of the string from start, with the given length.

alert( str.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters


4. Add/remove items from Array 

# splice
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
alert( arr ); // ["I", "JavaScript"]

# concat
alert( arr.concat([3, 4]) ); // "I", "study", "JavaScript", 3, 4

# Iterate: forEach method allows to run a function for every element of the array.
// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);


5. Searching in array

# indexOf/lastIndexOf and includes

let arr = [1, 0, false, 1];

alert( arr.indexOf(0) ); // 1
alert( arr.includes(1) ); // true
alert( arr.lastIndexOf(1) ); // 3 (last 1)

# find and findIndex/findLastIndex

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
  {id: 4, name: "John"},
];

let user = users.find(item => item.id == 1);
alert(user.name); // John

// Find the index of the first John
alert(users.findIndex(user => user.name == 'John')); // 0

// Find the index of the last John
alert(users.findLastIndex(user => user.name == 'John')); // 3

# Array.isArray
alert(Array.isArray({})); // false
alert(Array.isArray([])); // true


6. Map and Set

# getter and setter values in map
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3


# map iterations

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  alert(entry); // cucumber,500 (and so on)
}


# A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

# iteration over set

let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);


7. Object.keys, values, entries

Object.keys(obj) – returns an array of keys.
Object.values(obj) – returns an array of values.
Object.entries(obj) – returns an array of [key, value] pairs.


8. Array & Objects destructuring

# The rest ‘…’ operator
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is an array of items, starting from the 3rd one
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2


# objects destructor
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200


# JSON methods
JavaScript provides methods:

JSON.stringify to convert objects into JSON.
JSON.parse to convert JSON back into an object.


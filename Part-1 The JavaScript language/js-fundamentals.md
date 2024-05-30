1. Use of "use strict" keyword

# to use the modern feature added to JS, "use strict" keyword is being used.
# Modern JavaScript supports “classes” and “modules” – advanced language structures, that enable use strict automatically. So we don’t need to add the "use strict" directive, if we use them.


2. The typeof operator

typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)    -this behaviour is actually wrong as null has its own separate type
typeof alert // "function"  (3)


3. Type conversion

# String Conversion – Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.

# Numeric Conversion – Occurs in math operations. Can be performed with Number(value).

The conversion follows the rules:

Value	Becomes…
undefined-	 NaN
null-	0
true/false-	  1 / 0
string-   NaN	

# Boolean Conversion – Occurs in logical operations. Can be performed with Boolean(value).

Follows the rules:

Value	Becomes…
0, null, undefined, NaN, ""- 	false
any other value- 	true


4. String concatenation with binary +

alert(2 + 2 + '1' ); // "41" and not "221"
alert('1' + 2 + 2); // "122" and not "14"

# The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with  numbers and always convert their operands to numbers.

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers


5. Numeric conversion, unary +

# The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

6. Comma operator

# The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.

let a = (1 + 2, 3 + 4);
alert( a ); // 7 (the result of 3 + 4)


7. Extra Questions
#
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)

#
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12


8. Comparisons

# All comparison operators return a boolean value: 
alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)


# String comparison
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true


# Comparison of different types- When comparing values of different types, JavaScript converts the values to numbers
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1


# Comparison with null and undefined
alert( null === undefined ); // false
alert( null == undefined ); // true

# Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.
alert( null > 0 );  // (1) false   
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true


9. Conditional Branching

# A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.

# Other values become true, so they are called “truthy”.

# OR "||" finds the first truthy value. For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.

# AND “&&” finds the first falsy value. For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand. If all operands have been evaluated (i.e. all were truthy), returns the last operand.

# A double NOT !! is sometimes used for converting a value to boolean type:

alert( !!"non-empty string" ); // true
alert( !!null ); // false

alert( alert(1) || 2 || alert(3) ); 

The first OR || evaluates its left operand alert(1). That shows the first message with 1.
The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.


10. Nullish coalescing operator '??'


result = a ?? b  -->>   result = (a !== null && a !== undefined) ? a : b;

# The important difference between them is that:
|| returns the first truthy value.
?? returns the first defined value.


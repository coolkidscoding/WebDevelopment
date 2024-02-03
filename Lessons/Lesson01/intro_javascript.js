"use strict";

// This is a single line comment
//alert("Hello World!");

/*
This
is
a
multi
line
comment
*/

// variablees
let variable_name = 123;

// this variable takes the value of undefined 
let variable_name2;

console.log(variable_name,variable_name2);

const const_variable = 1234;

// this is an error as you cannot change a const
//const_variable = 321;

// this is the old way we created variables, we will not use this
var old_type_variable;

// data types
// numbers
let n = 123;
let f = 123.123;

// bigint 
let b = 100n;

console.log(typeof b)

// string
let s = 'Hello';
let s1 = "Hello";
let s2 = `Hello`;

let my_value = 123;

let my_message = `My value is ${my_value}`;
console.log(my_message);

// boolean
let t1 = true;
let f1 = false;

// interaction
// alert('this is an alert popup');
//prompt('What is your age?', 100);
//confirm('Are you ok today?');

// Type Conversions
let num = 123;
let str = String(num);

let num2 = Number(str);

// Operators
// + - * / % **

// += -= *= /=

// ++ --

let var1 = 10;
console.log(++var1);
console.log(var1++);

console.log(--var1);
console.log(var1--);
console.log(var1);

// Comparisons
// > < >= <=
// ==

// equality of value
console.log(true == 1);
console.log(false == 0);

// equality of value and type
console.log(true === 1);
console.log(false === 0);

// special values
// undefined
// null

console.log(null === false);
/*
// if statement
if (1 > 2) {
    alert('1 > 2');
} else if (2 > 1) {
    alert('2 > 1');
} else {
    alert('Not sure');
}
*/

// logical operators
// && this is and
// || this is or
// ! this is not

// Loops

// while loops
let i = 0;
while (i < 3) {
    console.log(`i=${i}`);
    i += 1;
}

// do-while
i = 0;
do {
    console.log(`i=${i}`);
    i += 1;
} while(i < 3)

// for loop
let w;
for(w = 0;w < 3;w++) {
    console.log(`w=${w}`);
}

// switch statement
let r = 4;
switch(r) {
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log(`something else ${r}`);
}

let variable = 123;

// functions
// traditional function
function functionName(arg1, arg2='Hello') {
    console.log('This is function functionName');
    console.log(arg1, arg2);

    let variable = 0;

    let new_variable = variable + 1;
    console.log(new_variable);
}

variable = functionName(1);
console.log(variable);

let my_new_function = functionName;
my_new_function(2,3);

console.log(typeof my_new_function);

// function expression
let sayHello = function() {
    console.log('Hello!');
}

sayHello();

// arrow function
let sum = (a, b) => a + b;

console.log(typeof sum);

let sum2 = (a,b) => {
    let result = a + b;
    return result;
}

console.log(sum2(4,5));

let sum3 = a => a + 100;

console.log(sum3(1));

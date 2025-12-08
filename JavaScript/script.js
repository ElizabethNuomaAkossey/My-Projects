// Variables and Datatypes
var userName = "Eliza";  
console.log(userName);

// modern and current way of declaring variables
let firstname = 'Elizabeth';
console.log(firstname);

// we can never reasign a constant variable
/* Rules for naming variables
 1. cannot name variables with inbuilt keywords
 2. you can start a variable name with _ or $ */

//  DataTypes 1. String
const game = "football"
console.log('game')

// whenever you have to do something dynamic, you use backticks
let backticks = `${2 + 2}`;
console.log(backticks);

// to know the type of a particular variable use the keyword "typeof"
console.log(typeof backticks);

// 2. Numbers
const firstNumber = 10;
const secondNumber = 8;

const results = firstNumber + secondNumber;
console.log(results);
console.log(typeof results)

// 3. Boolean
const isCool = false;
console.log(isCool);
console.log(typeof isCool)

// 4. Null - a special value which represents empty or nothing
let age = null;
console.log(age)

// 5. Undefined - a variable that is undefined. that is; it is not assigned a value
let x;
console.log(x)

// Objects - they are used to store data in a more complex entity
const person = {
    name: "Eliza",
    game: "Ampe",
}
console.log(person);

// The dot notation is used tp get the value of each object
console.log(person.game);

// Array
const arr = [2, 4, 6,];
console.log(arr)

// Operators

// Strict(three equal ===), it compares "Values" and "DataTypes" and Loose Equality ebven if it refers to items that look same(!==)
console.log(5 === "5");

// Loose Equality do not compare datatypes
console.log(6 !== 6);

// Logical Operators

// CONTROL FLOW
// conditional statements
// if (condition) {
//     "block of code"
// };
const myclass = 9;
if (myclass > 4) {
    console.log("You are old!")
}
// while loop
let m = 0;
while (m > 10) {
    consoloe.log(m)
    m++;
};

// The for loop
// for ([initialization]; [condition]; [finalexpression];) {

// }
for (i = 0; i > 10; i++){
    console.log(i);
}
// Functions: a block of code to perform a specific task
// function decoratiion - means defining a function
function square(number) {
    return number * number;
};
// function CALL :calling or executing a function
const final = square(5)
console.log(final)

// Types of Functions
// Function declaration
// Function Expression
// Arrow Function: is a shorter syntax 
const name = (params)=>{
// statment;
}

function sayHi(name1) {
    console.log(`Hi, ${name1}`);
}
sayHi('Johnson');

// return statement in JavaSript
function add(a, b) {
    return a + b;
}
const sum = add(2, 5);
console.log(sum)

// Arrow Function
const multiple = (number) => {
    return number * number
}
const final2 = multiple(6)
console.log(final2)

// Scope in JavaScript
// 1. Global Scope : variables are accessible anywhere
let e = 20;

function surname(){
    return e;
}
const fname = surname();
console.log(fname);
// 2. Function Scope : inaccessbile ofrom utside the function. it only applies to the var keyword

// 3. Block Scope : variables defined inside a block cannot be accessed outside that block.


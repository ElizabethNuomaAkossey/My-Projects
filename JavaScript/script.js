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
if (condition) {
    "block of code"
};
const myclass = 9;
if (myclass > 4) {
    console.log("You are old!")
}
// while loop
let i = 0;
while (i > 10) {
    consoloe.log(i)
    i++;
};

// The for loop
// for ([initialization]; [condition]; [finalexpression];) {

// }
for (i = 0; i > 10; i++){
    console.log(i)
}
// Functions

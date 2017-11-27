/**
 * Boolean expressions & operators
 */
//1. equals: == and ===(best to use ===)
let x = "100";
let y = 100;
//let result = x == y; //tests only content
//console.log(`x == y ${result}`);
let result = x === y; //tests content + type
console.log(`x === y ${result}`);

//2. OR and AND operators: ||, && - boolean truth table
// ||
let isWorking = true;
let hasProject = true;
let status = isWorking || hasProject;
console.log(`status ${status}`);
/**
 * OR operator formula
 * If the first operand is truthy(true), the result is first else second
 * 
 * falsy values:
 * boolean false, undefined, NaN, "" or ''(empty string), null, 0
 * 
 */
//let firstName = "Nainy"
//let firstName = ""
let firstName;
let noName = "No name set"
let fullName = firstName || noName;
console.log(`Full name ${fullName}`);
//IF CONDITION
let age;
if(age){
    console.log(`You are ${age} years old!`)
}
else{
    console.log(`Age not supplied`);
}
// &&
let a = "a";
let b = "b";
let res = b && a;
console.log(`AND ${res}`);
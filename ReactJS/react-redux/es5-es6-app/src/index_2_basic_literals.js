/**
 * LANGUAGE FUNDAMENTALS
 * variable declaratin=on
 * es 5
 * var variablename = value (literal)
 * es 6
 * let or const variablename = value(literal)
 * NOTE: ES 6 application uses only let/const not var
 * 
 * Javascript literals:
 * string,number,boolean,undefined,NaN,Infinity,function,null,object
 * 
 */


/*
//var name = "Nainy"; //literal
let name = "Nainy Jain"; //'let' is always preferable instead of 'var'
const address = "Bangalore"; //Read only, once the variable is assigned to a value, it can't be reassigned to different value
//address = "Mumbai"; //Throws error, can't reinitialize
console.log("Name : " + name);
console.log("Address : " + address);

let myvariable = "Hello"; //String
console.log(myvariable);
myvariable = 1000;
console.log(myvariable); //Type of variable is decided during run-time
                         //Dynamic typed programming language
*/

//LITERALS

//-------------------------------------------------------------------------------------------------------------------------------------
//1. string : "" or '' or ``(backtick - ES6 only)
//let name = "Nainy Jain";
let name = 'Nainy Jain';
console.log("Name : " + name);
let address = `Bangalore`;
console.log(address); //es 5
//`` back-tic notation -- ES 6 template string literal
//use case 1: concatenation
//console.log('Address : '  + address) //es 5
console.log(`Address using back-tic ${address}`);
//use case 2: multi line string literal
/*
let para =  "Hello" +
            "Hii" + 
            "Welcome" + 
            "Javascript";
console.log(para);*/
let para = `Hello
Hii
Welcome
Back-tic
Use case 2`;  //Browser interprets it differently, but it is used for concatenation
console.log(para);        
//-------------------------------------------------------------------------------------------------------------------------------------
//2. number : no integers : 64 bit
let salary = 28000; //number
console.log(`Salary : ${salary}`);
//-------------------------------------------------------------------------------------------------------------------------------------
//3. Boolean: true/false
let isWorking = true;
console.log(`Is working ${isWorking}`);
//-------------------------------------------------------------------------------------------------------------------------------------
//4. undefined: If variable does not have valid literals
let age;
console.log(`age ${age}`);
//-------------------------------------------------------------------------------------------------------------------------------------
//5. NaN - Not a Number: Error code which will be stored, the result of numeric computation
let workingDays; //undefined
let totalSalary = salary * workingDays; //number*undefined
console.log(`total salary ${totalSalary}`);
//-------------------------------------------------------------------------------------------------------------------------------------
//6. Infinity - divide by 0 | Exception never stops program execution, thus Infinity is stored as Literal
let counter = 100;
let avgCounter = counter/0;
console.log(`Average counter ${avgCounter}`);
/**
 * functions
 * functions are building block of javascript:
 * functions can be used for different implementations
 * >normal functions
 *   functions can hold logic of program
 * >Callback functions
 * >Constructor function
 */
//es 5 style
//function declaration
function sayHello() {
    console.log('Hello!');
}
//function invocation
sayHello();
//Function can take parameter and return
//parameter can be any literals,can return any literal
//javascript parameters are positional based.
//es 6 default parameter
function sayHai(name = 'defaultName', age = 18) {
    console.log(`${name} ${age}`)
}
sayHai('Subramanian', 30);
sayHai(); //undefined
//if more parameters which is not decided
//var-args : ... (spread operator)
function logger(name, ...arg) {
    //provides an implicit variable called arguments
    //console.log(arguments);
    console.log(`${name} ${arg}`);
}
logger('Subramanian', 'Hai');
logger('Subramanian', 'Hai', 'welcome');
logger('Subramanian', 'Hai', 'welcome', 'hello');
//Return type:

function sayWelcome() {
    //return 'Subramanian';//string
    // return 100;
    //return true; 
    return; //undefined
}
console.log(sayWelcome());
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Function literals
/**
 * In js function is literal:
 *  literal means we can assign to a variable.
 *  
 *  
 * Function is literal,since it is literal can be assigned to a variable
 * that variable can be used to call that function.
 * 
 * How to declare function literals?
 * patterns
 */
//function pattern -1
function sayGreet() {
    console.log('Greetings!');
}
sayGreet();
//function pattern 2.1 : literal pattern
function sayMyName(name) {
    //console.log('My name is ${name}');
    return `My name is ${name}`;
}
//function literal
let myname = sayMyName;
console.log(myname('Subramanian'));

//function pattern 2.2 : literal pattern
let yourname = function sayYourName(name) {
    return `Your name is ${name}`
};
console.log(yourname('ram'));
//function pattern 2.3 : literal pattern -Anonmous functions

let ourname = function (name) {
    return `our name is ${name}`
};
console.log(ourname('Indian'));
//////////////////Function literals :ES6 : Arrow functions//////
//function pattern 2.3 : literal pattern -Anonmous functions
/* let printName = (name) => {
    return `Arrow name is ${name}`
}; */
//single parameter + single body
//let printName = (name) => console.log(`Arrow name is ${name}`)
//let printName = name => console.log(`Arrow name is ${name}`);
//return single value 
//let printName = name => 'Hello';
//let printName = name => name;
//printName('Subramanian');
//console.log(printName('Subramanian'));
//no parameter
/* let printName = () => 'Test';
console.log(printName()) */
//multi parameter
let printName = (name = 'default', age = 18) => {
    let fullName = `${name} ${age}`
    return fullName;
};
console.log(printName('Subramanian'));
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//function as a parameter // greeter =callMe;
//es 5
/* function display(greeter) {
    console.log(greeter('ram'));
}

let callMe = function (name) {
    //console.log('Call Me' + name);
    return 'Call Me' + name;
};
display(callMe);
//literal
display(function (name) {
    return 'Call Me' + name;
}); */

let display = greeter => console.log(greeter('ram'));

let callMe = name => `Call Me ${name}`;
display(callMe);
display(name => `Call Me ${name}`);

/* function add(a, b) {
    return a + b;
}
let x = 100;
let y = 200;
console.log(add(x, y));
console.log(add(100, 200)); */
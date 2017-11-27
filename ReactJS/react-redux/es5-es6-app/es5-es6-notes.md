>es 6
>node
>IDE

>es6
>npm install create-react-app -g
  tool to create application
Project Creation:

create-react-app es5-es6-app

es5-es6-app>code .

C:\Users\admin\AppData\Roaming\npm 


>node.js
>webpack
>react&redux

Topics
>Introduction to javascript /langugage fundamentals
>Functions
>Object oriented Programming in  javascript
>DOM programming - react
>Ajax Programming -react


>>Introduction to javascript /langugage fundamentals

What is javascript?
Javascript is one of the programming language.
Javascript is functional object oriented pl.
Javascript is type free pl. - dynamic typed pl.no type is specfied
during compile time.
Javascript was created for web browser programming only.but
today javascript is every where-(browser,server,mobile).

Javascript history:
>javascript created 1995 - 1996.
  Name of the javascript  -Mocha ,Live Script,Javascript
  >Brendan Eich is an American technologist and creator of the JavaScript programming language.
  >1997 - lanaguage submitted to standard body  -ECMA
  >1997 javascript 1.0 / es 1 /ecma 1
  >1998-1999 es 3 /ecama 3
  >2005 -The technology ajax were introduced
  >2008 - ES 4
  >2009 - ES 5
  >2012 - ES 6 propsal started
       >major improvements 30+ new features added
  >2015 june ES 6 Final draft released
  >2016 ES 7 Proposal started
    >Under experimental 
  
>Transpilers convert es6 code into es5 code
  babel.js -compiler converts es6 code into es 5 code.
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Programming section:
>variables,datatypes,literals,control statements,operators.........

/**
 * language fundamentals
 * variable declaration
 * es 5
 * var variablename = value(literal)
 * es 6
 * let or const variablename =value(literal)
 *  Note: ES 6 application uses only let /const not var.
 * 
 *  Javascript literals:
 *  string,number,boolean,undefined,NaN,Infinity,function,null,object
 */
/* //var name = "Subramanian";//Literal
let name = "Subramanian"; //using es 6 
//read only: once variable assigned  to value,you cant reassign to
//differnt value
const address = "Banaglore";
//address = "Mumbai"; cant reinitalize
console.log("Name : " + name);
console.log("Address : " + address);

let myvariable = "Hello"; //string
console.log(myvariable);
myvariable = 1000;
console.log(myvariable); */
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//literal
//string :""  or '' or ``(es 6)
//let name = "Subramanian";
let name = 'Subramanian';
console.log(name);
//`` back-tic notation / Es 6 template string literal
let address = `Chennai`;
console.log(address);
//back-tic use cases
//use case 1: concatation
//console.log('Address :' + address); //es 5
console.log(`Address ${address}`);
//use : multi line string literal
//es 5
/* let para = "Hello" +
    "Hai" +
    "Welcome" +
    "Javascript"; */
let para = `Hello
            Hai
            Welcome
            Javascript
`;
console.log(para);
///////////////////////////////////////////////////////////////
//number : no integers : 64 bit
let salary = 28000;//number
console.log(`Salary ${salary}`);
/////Boolean: true /false
let isWorking = true;
console.log(`Is Working ${isWorking}`);
///undefined: If the variable does not have valid literals
let age;
console.log(`age ${age}`);
//NaN -Not a Number: Error code which will be stored ,the result of
//numeric computation.
let workingDays; //undefined
let totalSalary = salary * workingDays; //number * undefined
console.log(`total Salary ${totalSalary}`);
//Infinity
let counter = 100;
let avgCounter = counter / 0;
console.log(`Average counter ${avgCounter}`);


/**
 * Boolean expression and operators
 *  //
 *  equals -  ==  ===
 */

let x = "100";
let y = 100;
//let result = x == y; //test only content
let result = x === y; //test content + type
console.log(`x==y ${result}`);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// || , &&  -boolean truth table
// || 
let isWorking = true;
let hasProject = true;
let status = isWorking || hasProject;
console.log(`Status ${status}`);

/**
 * Or Operator formula 
 * if the first operand truthy(true),the result is first else second
 * 
 * falsy values:
 * boolean false,undefined,NaN,""/'',null,0
 * except these values every thing is true.
 * 
 */
let firstname = 'Subramanian';
let noName = 'No Name Set';
let fullName = firstname || noName;
console.log(`First Name ${fullName}`);
//if condition 
let age=18;
if (age) {
    console.log(`you are ${age} years Old`)
} else {
    console.log(`Age not supplied!`);
}

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

//////////////////////////////////////////////////////////////
Object oriented Programming and javascript:
/**
 * Object oriented Concepts and Implementation
 * 
 * Object: Memory
 * Object: data + behavior
 * data is declared using variables - instance variables
 * behavior is declared using functions - instance methods
 * this.id - instance variable
 * let/const/var id =  local variable
 * 
 * Javascript is fundamentally class free object oriented pl.
 *  >No classes to create objects
 * How to create object?
 * Creational Pattern
 * 1.constructor pattern
 *    Dervided from java pl.
 *   function pattern - es 5
 *   class pattern - es6
 * 
 * How to initalize data?
 * >direct / hardcoded 
 * >after object creation
 * >During object creation
 * Object relationship:
 *   >HAS-A
 *       
 *   >IS-A
 *     inheritance
 *   javascript is object inheritance.
 * Object inheritance other objects during runtime.
 * In js every object has super object -Prototype which has parent
 * called "Object".
 * 
 *  YourObject----Prototype---Object
 * Every object is linked via "__proto__" instance hidden variable
 * 
 *  
 * 2.literal pattern
 *    javascript pattern
 */


//function pattern:constructor

function Address(city = 'defaultcity') {
    this.city = city;
}
//Parent classs
function Person() {
    this.greet = 'Welcome';
}

function Employee(id = 1, name = 'defaultname', address = new Address()) {
    //instance variables
    this.id = id; //1;
    this.name = name; // 'Subramanian';
    //has a
    this.address = address;
    //instance methods
    this.calculateSalary = function () {
        return 1000;
    }
}
//call function
let employee = new Employee(1, 'ram', new Address('Chennai')); //constructor calling
//knowing object structure
console.log(employee);

//exclit inheritance
employee.__proto__ = new Person();

//after object creation
//employee.name = 'Ram' //setter
//how to use instance variables/methods using .operator
console.log(`Id ${employee.id}`); //getter method is called
console.log(`name ${employee.name}`);
console.log(`Greet ${employee.greet}`);

console.log(`city ${employee.address.city}`);

console.log(`salary ${employee.calculateSalary()}`);

class Order {
    orderid;
    constructor(orderid = 'AA001') {
        this.orderid = orderid;
    }
}

class CustomerParent {
    greet = 'CustomerParent';
}

//ES 6 Class declaration
class Customer extends CustomerParent {
    //instance variables
    id; //= 1;
    name; //= 'Subramanian';
    order;
    //es 6 special function:built in function
    constructor(id = 1, name = 'default', order = new Order()) {
        super();
        this.id = id;
        this.name = name;
        this.order = order;
    }
    //instance methods
    calculateGST = () => 1000 - 100;
}
let customer = new Customer(1, 'ram');
console.log(customer);

//customer.name = 'Karthik'
console.log(`Id ${customer.id}`); //getter method is called
console.log(`name ${customer.name}`);
console.log(`greet ${customer.greet}`);

console.log(`orderId ${customer.order.orderid}`);

console.log(`gst ${customer.calculateGST()}`);
//static variables: es 5 dont have static concept but es 6 has
//static variables,methods can be accessed without creating
//object
class Message {
    static success = 'success';
    static doStuff() {
        console.log('static method');
    }
}
console.log(Message.success);
Message.doStuff();
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//literals are used to create object
//liteals generally used to declare model data in applications

let book = {
    bookid: 1,
    author: 'Ram',
    //has-a
    chapter: {
        name: 'javascript'
    },
    getPrice: () => 1000
};
book.author = 'John'; //setter
console.log(`Book id ${book.id}`); //getter
console.log(`Book author ${book.author}`);
console.log(`chapter ${book.chapter.name}`);
console.log(`Price ${book.getPrice()}`);
////////////////////////////////////////////////////////////////
//How to pass literal object to function as parameter?
/* 
function printGuestDetails(guest) {

    //return 
    return guest
    return {
    id: 1,
    name: 'Subramanian',
    address: {
        city: 'chennai'
    };
}
};

//passing literal object as a parameter
let guest = {
    id: 1,
    name: 'Subramanian',
    address: {
        city: 'chennais'
    }
}; */
/**
 * null vs undefined
 *  null and undefined both are same.- dont have valid literal
 * then why null?
 * lets say i have 10 variable declaration
 * let x;
 * let employee=null;//meaning that employee may hold objects later
 * 
 * 
 */
/* let newGuest = null;
newGuest = 100;
console.log(`${newGuest.id} ${newGuest.name} ${newGuest.address.city}`);

newGuest = printGuestDetails(guest);

console.log(`${newGuest.id} ${newGuest.name} ${newGuest.address.city}`);

newGuest = printGuestDetails({
    id: 1,
    name: 'Subramanian',
    address: {
        city: 'chennai'
    }
});
console.log(`${newGuest.id} ${newGuest.name} ${newGuest.address.city}`); */

//ES 6  LITERAL OBJECT returning

/* let printGuestDetails = () => ({
    id: 1,
    name: 'Subramanian',
    address: {
        city: 'chennai'
    }
});
let newGuest = printGuestDetails();
console.log(`${newGuest.id} ${newGuest.name} ${newGuest.address.city}`); 
 */

//Object destructuring: Spiliting object keys
let printGuestDetails = ({id,name,address}) => {
    //destructure
    /* let id = guest.id;
    let name = guest.name;
    let address = guest.address;
     */
    //let { id, name, address } = guest;
    console.log(`${id} ${name} ${address.city}`); 
    
}
printGuestDetails({
    id: 1,
    name: 'Subramanian',
    address: {
        city: 'chennai'
    }
});

console.log(`orderId ${customer.order.orderid}`);

console.log(`gst ${customer.calculateGST()}`);
//static variables: es 5 dont have static concept but es 6 has
//static variables,methods can be accessed without creating
//object
class Message {
    static success = 'success';
    static doStuff() {
        console.log('static method');
    }
}
console.log(Message.success);
Message.doStuff();
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//literals are used to create object
//liteals generally used to declare model data in applications

let book = {
    bookid: 1,
    author: 'Ram',
    //has-a
    chapter: {
        name: 'javascript'
    },
    getPrice: () => 1000
};
book.author = 'John'; //setter
console.log(`Book id ${book.id}`); //getter
console.log(`Book author ${book.author}`);
console.log(`chapter ${book.chapter.name}`);
console.log(`Price ${book.getPrice()}`);

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Javascript and Module programming:

mylib.js    index.js
variable    
method
class

es 6 modules:

import  - for linking files
export  - sharing code

mylib.js
/**
 * 
 */
//variable
export const name = 'Subramanian';

//function
export const sayHello = () => 'Hello';
//classs

export class Welcome {
    constructor() {
        console.log('Welcome');
    }
}

index.js
/**
 *  how to link and get code
 */
import { name,sayHello,Welcome } from './mylib';
console.log(name);
console.log(sayHello());

let w = new Welcome();

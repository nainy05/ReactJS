/**
 * Object oriented concepted & implementaion
 * 
 * Object: memory
 * Object: data + behaviour
 * Javascript is fundamentally class free object oriented pl.
 * >no classes to create objects
 * 
 * How to create object?
 * Creational Pattern
 * 1. constructor Pattern
 *      derived from java pl
 *      function Pattern - es5
 *      class Pattern - es6
 * 2. literal pattern
 *      Javascript pattern
 * 
 */
//function pattern:constructor
//ES5
function Employee(){//noun name for cnstructor
    //instance variable
    this.id = 1;
    this.name = 'nainy';
    //instance methods
    this.calculateSalary = () => 1000; 
}
//call function
let employee=new Employee(); //object literal 
employee.name = "Anita" /////////////After object creation
console.log(`ID ${employee.id}`)
console.log(`Name ${employee.name}`)
console.log(`Salary ${employee.calculateSalary()}`)

//ES 6 class declaration
class Customer{///////////////hard-coded / direct
    //instance variable
    id = 22; // this is removed as it is implicit
    name = 'harshi';
    //instance methods
    calculateGST = () => 1000-100; 
}

let customer=new Customer(); //object literal 
console.log(`ID ${customer.id}`)
console.log(`Name ${customer.name}`)
console.log(`Tax ${customer.calculateGST()}`)

//During object creation
function Employee1(id=1,name='no name'){//noun name for cnstructor
    //instance variable
    this.id = id;
    this.name = name;
    //instance methods
    this.calculateSalary = () => 1000; 
}
let emp = new Employee1(23,"jain")
console.log(`ID ${emp.id}`)

class Customer1 {//constructer
    //instance variable
    id ; // this is removed as it is implicit
    name ;
    //constructor method es6
    constructor(id = 1, name = 'no name'){
        this.id = id;
        this.name = name;
    }
    //instance methods
    calculateGST = () => 1000-100; 
}

let x = new Customer1(1111,"abc");
console.log(x.id + ' ' + x.name)

//HAS A relationship - Class inside class
//IS A relationship - inheritence
//implicit inheritance
console.log(employee)
//explicit inheritance
employee.__proto__ = new Person(); 
function Person(){

}

//explicit inheritance es6 uses extends keyword & super
class CustomerParent{
    greet = 'CustomerParent'
}


//es6 has static concept
class Message{
    static success = 'success';
    static doStuff(){
        console.log('static methof')
    }
}
console.log(Message.success);
Message.doStuff();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//LITERAL PATTERN
let book = {
    bookid: 1,
    author: 'Ram',
    //has-a
    chapter: {
        name: 'javascript'
    },
    getPrice: () => 1000
};
console.log(`book id ${book.id}`)

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
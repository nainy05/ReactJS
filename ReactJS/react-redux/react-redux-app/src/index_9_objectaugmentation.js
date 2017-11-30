/**
 * Object Augmentation
 */
//constructor pattern
function Employee(){
    this.id = 1;
}
let employee = new Employee();
console.log(employee);
//Add a new property
employee.name="nainy";
//Update existing property
employee.id=200;
//update or Add
/**
 * If property exists update, else add 
 */
//LITERAL pattern
let customer = { id: 1};
console.log(customer);
//add new property
customer.name="jain";
//Update existing property
customer.id=9999;
////
let order = {}; //{}-->empty Object
console.log(order);
order.id = 100;
order.invoice=1234;

//delete and iterate property --> tutorial
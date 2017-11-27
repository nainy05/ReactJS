/*const result = require('./greeter.js'); //linking | require is function 
console.log(result)
console.log(result.name)
console.log(result.sayHello())*/

//exports -- shares code via single object

let result = require('./greeter.js');
console.log(result) //---> module exports -- shares only one code at a time, very useful to export only one module
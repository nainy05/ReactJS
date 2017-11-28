/**
 * How to write a simple web server and web application
 */
const http = require('http'); //internal node module, thus no need to mention path | https://nodejs.org/api/modules.html

//create server and application
const server = http.createServer((request,response) =>{
    response.write('<h1>Welcome to Node Web Application!!!</h1>');
    response.end();
});
//start server
server.listen(3001, () => { //3001 is port number 
    console.log('Server started');
});
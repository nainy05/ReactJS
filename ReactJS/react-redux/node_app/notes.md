Node.js

What is Node.js?
>Node.js is javascript runtime/vm to execute javascript programs.
>javascript programs can be executed only inside browser before 2008.
>Google relased javascript engine called v8 in 2008 as a open source project.based on v8 only node was created.

>Why node was created?
Node was created for building NonBlocking IO programs.
>Node was created to build applications powered network io.
network io:
>socket programming
>http programming  - which is eq to servlet/jsp or asp/php

Why node is more suitable for http?
>node is nonblocking
>node is eventdriven
>node is written in javascript
>node is single threaded

In node what we are going to do?
>io program

Node brings lot of best practices:
>node programs are modular 
   >modularity is achived through commonjs design pattern and using require.js
commonjs keywords to share and link code
>require() - to link files
>exports , module.exports -sharing

>node is powered by a tool called npm
>npm is node package manager
npm is used to share  code,grab the code from others
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
How to write simple javascript and how to run?

>node hello.js

How to create modular code?

exports -  which shares code via one single object
module.exports - which shares only one code at a time.
                 very usefull if you are planing to export
only one module.


console.log('Greeter file!');
//sharing the code
/* //variable
exports.name = 'Subramanian';
//methods
exports.sayHello = () => 'Hello'; */

//
let name ='Subramanian'
module.exports = name;

/* const result = require('./greeter');
console.log(result);
console.log(result.name);
console.log(result.sayHello()); */

let result = require('./greeter')
console.log(result);
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
How to share node modules(programs) to my team,my project,my company,community?
npm command
is used to publish modules,install modules,uninstall modules

where can i share node modules?
https://www.npmjs.com - repo server.

How to grab third party modules?
>npm command
>meta file:
every node project contains a file called "package.json"
 >which is meta file which describes about node project.
>before starting any node project , you have to create package.json
>npm init

>how to install /grab third party modules?
Before that we have
2 types of module
>local module
   are used for development
   >npm install express
The folder is created called "node_modules"
 inside all files will be copied
 
>global module
  are used for tooling purpose.
  tooling like compilers,build tools(webpack,grunt,gulp)
   commands to execute programs
 global modules are installed using "-g" flag
 >npm install modulename -g
Both are node module only.

package.json:
   "dependencies": {
    "jquery": "^3.2.1",
    "react": "^16.1.1"
  }
 Says how many packages , i have installed in my project.

 npm install options
 --option
 --save
 --save-dev
 >npm install react --save 
 >npm install chai --save-dev

   "dependencies": {
    "jquery": "^3.2.1",
    "react": "^16.1.1"
  },
  "devDependencies": {
    "chai": "^4.1.2"
  }
  devDependencies are used for only development  purpose not of production.

  How to uninstall npm modules?
  npm uninstall jquery --save

npm scripts:
 are used to execute  commands through npm.
 
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start" : "node index.js"
  }

How to run node scripts?
>npm start 
start,test,run which are built in command keys
>npm start,npm run,npm test

user defined commands key
build,hello,x
>npm run build npm run hello npm run x
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
How to write io program in node?
>No disk file io 
>HTTP IO
How to write a simple Http Program?

/**
 * How to write a simple web server and web application
 */
const http = require('http');

//create server and application
const server = http.createServer((requrest, response) => {
    //sending response
    response.write('<h1>Welcome to Node Web Application');
    response.end(); //closing connection
});
//start server
server.listen(3001, () => {
    console.log('Server Started!');
});

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
How to write express based Restfull webservices?
>npm install express --save
/**
 * 
 */
//Get express module
const express = require('express');
//Create Application Object
const app = express();

//data
const EMPLOYEES = [{
        id: 1,
        name: 'Subramanian'
    },
    {
        id: 2,
        name: 'Ram'
    },
    {
        id: 3,
        name: 'Karthik'
    }
];
//index path
app.get('/', (request, response) => {
    response.end('<h1>Welcome to Sapient API Server</h1>');
});


//api creation
//http://localhost:3001/sapient/api/employees
app.get('/sapient/api/employees', (request, response) => {
    response.json(EMPLOYEES);
});

//start server
app.listen(3001, () => console.log('Express Server is Started!'));
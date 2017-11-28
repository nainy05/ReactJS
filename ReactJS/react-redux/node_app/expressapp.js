/**
 * RESTFUL web api
 * how to write express based RESTFUL web api
 * npm install express --save
 */
//Get express module
const express = require('express');
//Create Application object
const app = express();

//data
const EMPLOYEES = [{
    id: 1,
    name: 'Nainy'
},
{
    id: 2,
    name: 'Harshi'
},
{
    id: 3,
    name: 'Mann Manu'
}
];

//Index path
app.get('/',(request,response) => {
    response.end('<h1>Welcome to Sapient API server');
})

//api creation
//http://localhost:3001/sapient/api/employees
app.get('/sapient/api/employees', (request, response) => {
    response.json(EMPLOYEES);
});

//start server | node expressapp.js
app.listen(3001, () => {
    console.log('Express server is started!')
});
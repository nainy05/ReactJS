/**
 * List rendering
 */
import React, { Component } from 'react';
import { render } from 'react-dom';

/**
 * ul
 *   <li>1</li>
 *   <li>2</li>
 *  array.map(function) - iterate
 */
//Component:variable Pattern
/* const List=numberList.map((item,index) => { 
    return (<li key={index}>{item}</li>);
}); */

//const List=numberList.map((item,index) =>(<li key={index}>{item}</li>));

//const ListApp = () => (<ul>{List}</ul>)

/* const ListApp = () => (<ul>
    {numberList.map((item, index) => {
        return (<li key={index}>{item}</li>);
    })}</ul>); */
/* const ListApp = ({ numberList }) => (
    <ul>
    {numberList.map((item, index) =>
            (<li key={index}>{item}</li>))}
    </ul>);
    

const numList = [1, 2, 3, 4, 5, 6];
render(<ListApp numberList={numList} />, root); */
//Employee List

const ListApp = ({ empList }) => (
    <ul>
    {empList.map((employee, index) =>
            (<li key={index}>
                <span>{employee.id}</span>{employee.name}
            </li>))}
    </ul>);

const EMPLOYEES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
render(<ListApp empList={EMPLOYEES} />, root); 
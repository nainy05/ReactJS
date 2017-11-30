/**
 * if dont supply any property to component, what will happen?
 *  It will be undefined. react replaces undefined with empty
 * string but this is not good always.
 * React has concept called "default Props"
 * 
 * Property Constraints /Validation
 * 
 * Property is supplied as a separate package,so we have to install it.
 * Property constriants only for development purpose not for running.
 * > npm install prop-types --save
 */

import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class Employee extends Component{
    static defaultProps = {
        id: 1,
        name: 'Default Name',
        isWorking:false,
        address: {
            city: 'defaultCity'
        }
    };

    render() {
       const { id, name, status, address } = this.props;
        return (
            <div>
                <h1>Employee Details</h1> 
                <div>
                    <p>{id}</p>    
                    <p>{name}</p>  
                    <p>{status ? "Working": "NotWorking" }</p> 
                    <p>{address.city}</p> 
                </div>    
            </div>    
        );  
    }
} 

//print defaultProps variable
//Assign defaultProperty values:
//default values can be supplied outside class or inside class
/* Employee.defaultProps = {
    id: 1,
    name: 'Default Name',
    isWorking:false,
    address: {
        city: 'defaultCity'
    }
}; */

const empname = 'Subramanian'; //string
const empid = 2; // number
const isWorking = true; //boolean
const address = {
    city:'Chennai'
};//literal object

//property constraint
//propTypes static variable from Component class
/**
 * property warning
 * Warning: Failed prop type: Invalid prop `id` of type `string` supplied to `Employee`, expected `number`.
    in Employee (at index.js:71)
 */
Employee.propTypes = {
    id:PropTypes.number
}


render(<Employee id={empid} />, root)

/**
 * Parent /Child 
 * Master /Detail
 */

import React, { Component } from 'react';
import { render } from 'react-dom';

//Two compoent - Master,Detail

//Parent
class Employee extends Component {
    
    render() {
        const { id, name, status, address } = this.props;
         return (
             <div>
                 <h1>Employee Details</h1> 
                 <EmployeeDetails id={id} name={name} status={status} address={address}/>  
             </div>    
         );  
     }
}
//Child
class EmployeeDetails extends Component {
    render() {
        const { id, name, status, address } = this.props;
         return (
              <div>
                     <p>{id}</p>    
                     <p>{name}</p>  
                     <p>{status ? "Working": "NotWorking" }</p> 
                     <p>{address.city}</p> 
               </div>    
                
         );  
     }
}

//Data
const empname = 'Subramanian'; //string
const empid = 2; // number
const isWorking = true; //boolean
const address = {
    city:'Chennai'
};//literal object

const App = () => (
    <Employee id={empid}
        name={empname}
        status={isWorking}
        address={address} />);

render(<App />, root);

/**
 * <App>
 *     <Employee>
 *        <EmployeeDetails></EmployeeDetails>
 *     </Employee>
 * </App>
 */
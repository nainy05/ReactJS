/**
 * Property:
 * Passing data as prop(attribute)
 * passing data declaratively
 * <Employee propname=propvalue>
 * Property:
 *  passing data as prop(attribute):
 *  passing data declaratively.
 *   <Employee propname=propvalue/>
 *   propname - becomes instance variable of Component , which
 *   will be augmented into object pointed by props variable.
 *  propvalue - can be javascript literals(string,number,boolean,
 *  object,array,function
 * )
 *  eg 
 *  <Employee name="Subramanian"/> - hardcoded
 *  note: prop value can be hardcoded or can be variable /expression
 *  let empname='Subramanian'
 *  <Employee name={empname}/> 
 * 
 *  props ={};
 *  props = {name:'Subramanian'}
 */
import React,{Component} from 'react';
import {render} from 'react-dom';

//class pattern
//es 6 class pattern and props
/*class Employee extends Component{
    render(){
        //Printing props | Empty object by default {}
        console.log(this.props);
        const{name,id,status,address} = this.props;
        return(
            <div>
                <h1>Employee Details</h1>
                <div>
                    <p>Employee Name : {name}</p>
                    <p>Employee ID   : {id}</p>
                    <p>{status ? "Working" : "Not Working"}</p>
                    <p>City          : {address.city}</p>
                </div>
            </div>
        )
    }
}
//hardcoded prop value
//render(<Employee name="Nainy"/>,root);
//
const empname = "Nainy Jain"; //String
const empid = 2; //Number
const isWorking = true; //boolean
const address = {
    city: "Jabalpur"
}
render(<Employee id = {empid} name={empname} status={isWorking} address={address}/>,root);*/

/**
 * In functional pattern props are supplied as constructor argument
 */
/*const Employee = (props) => {
    const{name,id,status,address} = props;
     return(
            <div>
                <h1>Employee Details</h1>
                <div>
                    <p>Employee Name : {name}</p>
                    <p>Employee ID   : {id}</p>
                    <p>{status ? "Working" : "Not Working"}</p>
                    <p>City          : {address.city}</p>
                </div>
            </div>
        )
}*/
const Employee = ({name,id,status,address}) => 
     (
            <div>
                <h1>Employee Details</h1>
                <div>
                    <p>Employee Name : {name}</p>
                    <p>Employee ID   : {id}</p>
                    <p>Status : {status ? "Working" : "Not Working"}</p>
                    <p>City          : {address.city}</p>
                </div>
            </div>
        )

const empname = 'Nainy'; //string
const empid = 2; // number
const isWorking = true; //boolean
const address = {
    city:'Jabalpur'
};//literal object
//render(<Employee name="Subramanian" />, root); -hardcoded
render(<Employee id={empid} name={empname} status={isWorking} address={address} />, root)

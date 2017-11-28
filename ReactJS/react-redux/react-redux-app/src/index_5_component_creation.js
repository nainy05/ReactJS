/**
 * Component creational patterns
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom';

//variable pattern
/*const welcome = <h1>Welcome</h1>; 
ReactDOM.render(welcome,document.getElementById('root'));*/

//Functional pattern
/**
 * Using javascript function
 * you have to declare class using function
 * >es5 function
 * >es6 arrow 
 */
//>es5 function
/*function Welcome(){
    return (<h1>Welcome1</h1>);
}*/
//es6 arrow
//const Welcome = () => <h1>Welcome2</h1>;
//es6 class pattern
class Welcome extends React.Component{
    //Override React.Component class's render method
    render(){
        return (<h1>Welcome3</h1>);
    }
}
ReactDOM.render(<Welcome/>,document.getElementById('root'));
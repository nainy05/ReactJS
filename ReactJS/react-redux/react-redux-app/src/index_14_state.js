/**
 * State
 */
import React, { Component } from 'react';
import { render } from 'react-dom';

//Statefull Component
class Employee extends Component{
 
     //declare data (instance variables)/state
    state = {
        id: 1,
        name: 'Subramanian',
        address: {
            city:'Chennai'
        }
    };


    render() {
        console.log(this.state);
        const { id, name, address } = this.state;
        return (<div>
            <h1>Employee Details</h1>
            {/*<p>{this.state.id}</p>
                <p>{this.state.name}</p>
                <p>{this.state.address.city}</p> 
            */}    
            <p>{id}</p>
            <p>{name}</p>
            <p>{address.city}</p>
        </div>);
    }
}
render(<Employee />, root);
/**
 * State and Events
 */

  /**
  * How to change/update state-data modification?
     Events
     Javascript -plain
     <input type="button" onclick="increment()" value="click">
     function increment(e){

     }
  
     React -jsx syntax
    <input type="button" onClick={increment}/>
     
     Steps:
     1.You need to bind the event listener with 
       component by using syntax
       increment = this.increment.bind(this);

     */

import React, { Component } from 'react';
import { render } from 'react-dom';

//Statefull Component
class Counter extends Component{
 
     //declare data (instance variables)/state
    state = {
        count: 1,
        activated: true,
        disabled : false
    };
    //Event Binding Syntax:
    onIncrement = this.onIncrement.bind(this);

    //method - event Handler method
    onIncrement() {
        console.log('Event is triggered!');
        this.setState({
            count: this.state.count + 1,
            activated: !this.state.activated
        })
        if (this.state.count === 10) {
            this.setState({
                disabled: !this.state.disabled
            })
        }
    }
    render() {
        console.log('render is called');
        const {count,activated,disabled} = this.state
         return (<div>
             <h1 hidden={activated}>Counter {count}</h1>
             <button disabled={disabled}  onClick={this.onIncrement}>Increment</button>
        </div>);
    }
}
render(<Counter />, root);
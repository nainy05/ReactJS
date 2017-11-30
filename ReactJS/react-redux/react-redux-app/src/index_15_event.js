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
        count:1
    };
    //Event Binding Syntax:
    onIncrement = this.onIncrement.bind(this);

    //method - event Handler method
    onIncrement() {
        console.log('Event is triggered!');
        this.setState({
            count:this.state.count+1
        })
    }
    render() {
        const {count} = this.state
         return (<div>
            <h1>Counter {count}</h1>
             <button onClick={this.onIncrement}>Increment</button>
        </div>);
    }
}
render(<Counter />, root);
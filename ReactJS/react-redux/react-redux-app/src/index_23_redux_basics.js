/**
 * Redux
 * createStore:function
 * call createStore(counterReducer)
 */
import { createStore } from 'redux';
import React, {Component} from 'react';
import { render } from 'react-dom';

const CounterReducer = (counter = 0, action) => {
    //Logic 
    switch (action.type) {
        case 'INCREMENT':
            return counter + 1;
            break;
        case 'DECREMENT':
            return counter - 1;
            break;
        default:
            return counter;
            break;
    }
};
const store = createStore(CounterReducer);
//Start Request processing
const INCREMENT_ACTION = {
    type:'INCREMENT'
};
const DECREMENT_ACTION = {
    type:'DECREMENT'
};
//Read Value from store
store.subscribe(() => { 
    console.log(store.getState());
});

class Counter extends Component{

    onIncrement = this.onIncrement.bind(this);
    onDecrement = this.onDecrement.bind(this);
    
    onIncrement() {
        store.dispatch(INCREMENT_ACTION);
    }
    onDecrement() {
        store.dispatch(DECREMENT_ACTION);
    }
    render() {
        return (<div>
            <h1>{store.getState()}</h1>
            <button onClick={this.onIncrement}>INCREMENT</button>
            <button onClick={this.onDecrement}>DECREMENT</button>
            
        </div>);   
    }
}
//store.dispatch(INCREMENT_ACTION);
render(<Counter />, root);
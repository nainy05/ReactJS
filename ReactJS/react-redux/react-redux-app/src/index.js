import React, { Component } from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';


/**
 * react-redux binding lib
 * npm install --save react-redux
 *  Steps:
 *  >Redux
 */
///Redux - State Layer
const couterReducer = (counter = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return counter + 1;
        case 'DECREMENT':
            return counter - 1;
        default:
            return counter;
    }
};
const appStore = createStore(couterReducer);
/////////////////////////////////////////////////////////////////////
//Actions:
const INCREMENT_ACTION = {
    type: 'INCREMENT'
}
/**React Principle
 * 1.The data should be passed as prop-Statelesss Application.
 * 2.Data(state) now is availbale in redux.How to access redux
 *   state inside react as a prop.
 *   react-redux lib defines configuration:
 *    Mapping redux state with React as prop
 *    State of redux becomes prop of React
 */

//Configuration : Redux-state to React-prop conversion
function mapStateToProps(counter) {
    return {
        //value(React's prop):counter(redux's state)   
        value: counter //or counter
    }
}
//Configuration : Redux-Dispatch(Action) to React-Prop(eventListener)
//configuration:Action Mapping
//Map Redux action to Component prop(function)
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncrement: () => dispatch(INCREMENT_ACTION)
    }
}
/////////////////////////////////////////////////////////////////
//React :View
class Counter extends Component {
    render() {
        const { value, onIncrement } = this.props;
    return (
        <div className="container">
         <h1>React-Redux App</h1>      
         <p className="badge badge-secondary">
                {value}
         </p>
         <br />
         <button onClick={onIncrement}>Increment</button>
      </div>
    )
  }
}
//Binding Redux + React
// Connected Component // Higher Order Compoent
const CounterApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
//You have to pass  Redux store to React as prop.
//How to pass store Object to React Application
render(<Provider store={appStore}>
    <CounterApp/>
</Provider>, root);
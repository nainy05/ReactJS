/**
 * Middlewares:
 * 
 */
import { createStore,applyMiddleware,combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

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

const EmployeeReducer = (employees = [], action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
             
           // return employees.concat(action.newEmployee);
            //using es 7 spread operator
            return [...employees, action.employee];
            break;
        case 'GET_EMPLOYEES':
                return employees.concat(action.employees);
           break;
        default:
            return employees;
            break;
    }
};

//Middleware logic

//middleware takes store as paramere
//Redux uses middleware syntax as curry function syntax
function logger({ getState }) {
    return next => action => {
      console.log('will dispatch', action)
        // Call the next dispatch method in the middleware chain.
       let returnValue = next(action)  
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue
    }
}
let rootReducer = combineReducers({EmployeeReducer,CounterReducer})
const store = createStore(rootReducer,
    applyMiddleware(logger,thunkMiddleware));

//Start Request processing
const INCREMENT_ACTION = {
    type:'INCREMENT'
};
const DECREMENT_ACTION = {
    type:'DECREMENT'
};

const getEmployeeActionCreator = employees => {
    return {
        type: 'GET_EMPLOYEES',
        employees
    }
}

//Async Action Ajax:Middleware
 //middleware :Action creator
const getEmployees = url => dispatch => {
    //Ajax code will go--you can use any ajax lib
    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(employees => {
            //wait logic here goes:
            //dispatch willl call reducer when data is available.
            dispatch(getEmployeeActionCreator(employees));
        });
};


//Read Value from store
store.subscribe(() => { 
   console.log(store.getState());
    
});

//start dispatching action:
store.dispatch(getEmployees('http://localhost:3001/sapient/api/employees'));

store.dispatch(INCREMENT_ACTION);
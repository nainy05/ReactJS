import { createStore,combineReducers } from 'redux';


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
    
        default:
            return employees;
            break;
    }
};

/**
 * combineReducer({}) takes literal object as parameter
 *  literal object contains configuration about reducers
 *  {EmployeeReducer:EmployeeReducer,CounterReducer:CounterReducer}
 * {EmployeeReducer,CounterReducer}
 */
const rootReducer = combineReducers({EmployeeReducer,CounterReducer});
const store = createStore(rootReducer);


//Action Creator

/* function addEmployeeActionCreator(employee) {
    return {
        type: 'ADD_EMPLOYEE',
        employee  // employee:employee : es 6 object destrucing
    }
} */
const addEmployeeActionCreator = employee =>({
        type: 'ADD_EMPLOYEE',
        employee  // employee:employee : es 6 object destrucing
});

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

store.dispatch(INCREMENT_ACTION);
store.dispatch(DECREMENT_ACTION);


store.dispatch(addEmployeeActionCreator(
    { id: 1, name: 'Subramanian' }
));
store.dispatch(addEmployeeActionCreator(
    { id: 2, name: 'RAM' }
));

import { createStore } from 'redux';

/**
 * immutablity
 */
/* let list = [1, 2, 3];
Object.freeze(list);
//list.push(4);
console.log(list.concat([4])) */;



const EmployeeReducer = (employees = [], action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
                
            // return employees.concat(action.newEmployee);
            //using es 7 spread operator
            return [...employees, action.newEmployee];
            break;
    
        default:
            return employees;
            break;
    }
};
const store = createStore(EmployeeReducer);
//Start Request processing
const EMPLOYEE_ADD_ACTION = {
    type: 'ADD_EMPLOYEE',
    newEmployee: {
        id: 1,
        name:'Subramanian'
    }
};
//Read Value from store

store.subscribe(() => { 
    console.log(store.getState());
    
});
store.dispatch(EMPLOYEE_ADD_ACTION);
store.dispatch({
    type: 'ADD_EMPLOYEE',
    newEmployee: {
        id: 2,
        name:'Ram'
    }
});
store.dispatch({
    type: 'ADD_EMPLOYEE',
    newEmployee: {
        id: 3,
        name:'Karthik'
    }
});
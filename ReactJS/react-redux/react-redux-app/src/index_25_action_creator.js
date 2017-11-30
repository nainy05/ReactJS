import { createStore } from 'redux';

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
const store = createStore(EmployeeReducer);


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


//Read Value from store

store.subscribe(() => { 
    console.log(store.getState());
    
});

store.dispatch(addEmployeeActionCreator(
    { id: 1, name: 'Subramanian' }
));
store.dispatch(addEmployeeActionCreator(
    { id: 2, name: 'RAM' }
));
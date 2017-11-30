/*Component Life cycle
* Life cycle is classified based on phase
* 1.Mount Phase
*   Initial Render
*  1.constructor()
   2.componentWillMount()
   3.render()
   4.componentDidMount()
* 2.Update Phase
*   Once UI rendered ,triggered by events
*  1.componentWillReceiveProps()
   2.shouldComponentUpdate()
   3.componentWillUpdate()
   4.render()
   5.componentDidUpdate()
* 3.UnMount Phase
*   When DOM Element is removed from the DOM Tree
*/


///--------------------D:\React Training - Nov17\react-redux\node_app>node react-life-cycle.js---------------------------------------------
import React, { Component } from 'react';
import { render } from 'react-dom';


class Employee extends Component{
    constructor() {
        super();
        console.log('Constructor is called');
        this.state = {
            employees: [],
            rating: 0
        }
        this.Onincrement = this.Onincrement.bind(this); 
    }   
    Onincrement() {
        this.setState({ rating: this.state.rating + 1 });
    }
    //data initalization
    componentWillMount() {
        console.log('Component WIll Mount')
    }

    //render
    render() {
        console.log('render is called')
        const { employees,rating } = this.state;
        return (
            <div>
                <h1>Employee Details</h1>
                <ul>
                {employees.map((employee, index) =>
                        (<li key={index}>
                        <span>{employee.id}</span>{employee.name}
                 </li>))}
                </ul>);   
               <DisplayBoard rating={rating} />  
               <button onClick={this.Onincrement}>Rate</button> 
            </div>
        );
    }
    //After render : once VDOM is inserted into real dom tree
    //Ajax,Websocket,Timer
    componentDidMount() {
        console.log('Component did mount is called')
        //Ajax
        const url = 'http://localhost:3001/sapient/api/employees';
        fetch(url)
            .then(payload => payload.json())
            .then(data =>this.setState({employees:data}))
            .catch(err=>console.log('Some thing Went Wrong'));
    }
}

class DisplayBoard extends Component{
    render() {
        const { rating } = this.props;
        return (
            <h1>{rating}</h1>
        )
    }
    shouldComponentUpdate() {
        return true;
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }
    componentDidUpdate() {
        console.log('COmponnent updated complete')
    }
}                



render(<Employee />, root);
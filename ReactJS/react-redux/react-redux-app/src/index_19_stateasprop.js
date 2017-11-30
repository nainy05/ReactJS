/**
 * State as prop
 */

import React, { Component } from 'react';
import { render } from 'react-dom';

//Statefull Component

class NameComponent extends Component{
    state = {
        name:''
    }
    onUpdate = this.onUpdate.bind(this);
    onUpdate(e) {
        this.setState({ name: e.target.value });
    }
    render() {
        const { name } = this.state;
        return (<div>
            {/* Child Component gets state as prop:dynamic prop */}
            <DisplayBoard name={name}/>
            <hr/>
            <input onKeyUp={this.onUpdate}/>
        </div>);
    }
}
//Display Component:stateless Component
const DisplayBoard = ({ name }) => (<h1>{name}</h1>);
render(<NameComponent />, root);
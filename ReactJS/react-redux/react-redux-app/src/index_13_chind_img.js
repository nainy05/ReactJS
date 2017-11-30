import React, { Component } from 'react';
import { render } from 'react-dom';
//Imort image
import logo from './logo.svg';

class Tab extends Component{
    render(){
        console.log(this.props)
        const {children} = this.props;
        return(
            <div>
                {children}
            </div>
        );
    }
}

const Welcome = () => (<h1>Welcome</h1>);

const App = () => (
    <Tab>
        {/*JSX comment : Here p is prop to tab*/}
       {/* <p>This is Tab Content</p>*/}
        <h1>Reach JS</h1>
        <img src={logo}/>
        <Welcome/>
    </Tab>
);

render(<App/>,root)
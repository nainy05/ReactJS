/**
 * Imperative coding using react!
 * never used
 */

import React from 'react';
import ReactDOM from 'react-dom';

//Imperative way to create dom element
/*const newH1 = React.createElement(
    "h1",
    null,
    "Hello"
);
ReactDOM.render(newH1,document.getElementById('root'));*/

//Declarative coding
const newH1 = <h1>Hello</h1>; //this is not HTML, its JSX language written by FaceBook
                              //This JSX code must be compiled to covert it to JS as browser understands only JavaScript
                              //Compiler used - Babel
ReactDOM.render(newH1,document.getElementById('root'));
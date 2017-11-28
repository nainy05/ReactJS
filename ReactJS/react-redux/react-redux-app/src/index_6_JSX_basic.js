/**
 * Composing multiple elements & basic JSX rules
 * 
 * Javascript(if tag is not closed no error comes) and Xml(if tag is not closed XMLParser error comes)
 * <h1></h1> //JSX uses Xml grammar to enforce rules
 * JSX rules:
 * > you must have one single parent
 * > open element must be closed
 * > elements are case sensitive
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';


//<div> is one single parent
//<hr/> self closing (rule 2)
/*const welcome = (<div>
                    <h1>Welcome</h1>
                    <h2>Home</h2>
                    <hr/> 
                 </div>
);*/
const Welcome=()=>(<div>
                    <h1>Welcome</h1>
                    <h2>Home</h2>
                    <hr/> 
                 </div>);
                 //React is useful for making custom tags
ReactDOM.render(<Welcome/>,document.getElementById('root'));
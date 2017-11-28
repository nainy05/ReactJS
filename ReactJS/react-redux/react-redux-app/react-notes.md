Reach JS

>create-react-app react-redux-app 

React.js is library(tool to solve only one issue) for building user interfaces using javascript
angular is framework(implementation for large scale problems)

Why react?
it is for applications having large data set changing rapidly
very fast for data changes

React.js performance
It uses concept called "Virtual DOM"
https://vuejs.org

What is DOM?
Document Object Model --> its a spec from w3c to represent document structures in  source and in runtime.
HTML is DOM implementation language, used to create web docs

HTML Basic grammer:
>HTML document is created by using concept called tags/markup

DOM programming : 
DOM tree traversal
search
update
delete


NODE TYPES
element 
text
attribute
comment

JS was created to manipulate DOM tree

Source code     browser       c-layer       object(JavaScrpt)       Reference variables         Library
________________________________________________________________________________________________________________________

<html>          DOM tree      C wrapper     Object for node         document, window,           DOJO, jQuery, backbone
<body>                                      like h1                 history, location           Knockout,angular,react
</body>
</html>

JS implicit refernce variable:
document, window, history, location

DOM programming using JS is very complicated, thus library were introduced. they are used to make DOM programming clean

<h1> object in JavaScript

????




Dom programming using pure JavaScript
----------------------------------------
create h1 element dynamically
<body> --------- HTMLDocument - class for <body> node

function createElement(){

}



React is using createElement internally
<h1>Hi there and greetings!</h1>(React code) -------> React.createElement() ------> document.createElement() --------> JS native code ------> Browser node


-------------------------------------------------------------------------------------------------------------------------------------

Building blocks of react:
----------------------------
react used to build simple to complex DOM elements
React distributes libs as npm dependencies
2 libraries ---> react and react-dom

export and export default

react - provides basic dom element creation api
reactDom - provides basic dom insertion api (render)

How to create dom element/elements
2 ways:
>impertive programming 
    writing more code to create dom elements e.g. JS, jQuery
>declartive programming
    introduced by angular
    dont write boiler plate code, write less code | use always html like syntax

React is declartive programming lib

JSX - Javascript ans XML
>Sublanguage to create DOm elements
>not understandable by browser so must be compiled doen to JS
<h1>Hello</h1>; //this is not HTML, its JSX language written by FaceBook
                              //This JSX code must be compiled to covert it to JS as browser understands only JavaScript
                              //Compiler used - Babel


COMPONENT::
component is object
h1 is component(termed by microsoft 1989) --> any UI object is component 
Employee is normal object
Component = {Data + method + User Interface}

3 ways or patterns to create component:::
>variable pattern
>functional pattern
>class pattern

Every Component class(object) has superclass(React.Component)-->present in react package

React.Component class:
----------------------
>instance variable
    props,state
>instance methods
    render,componentDidMount etc.
>static variable, methods
    defaultProps


how to build complex components
COMPONENT COMPOSTION
build components and assemble

Implementation:
layouts
container
header
mainsection
footer
Think in html

<div> -container
Separate file for modules(saved in .jsx meaning component file) and segregated later in index.js
index file cannot ne .jsx
components can be jsx

React' must be in scope when using JSX  react/react-in-jsx-scope --> import React from 'react';

CSS:
>style, class - attributes


GLobal style : index.css
Component specific style : import './App.css'

index.js:2177 Warning: Invalid DOM property `class`. Did you mean `className`? ||| JSX error
>JSX rules for html attributes/property

html attribute must be camelCase
class-html className-jsx

How to integrate third party css like bootstrap?
npm install bootstrap --save
import 'bootstrap/dist/css/bootstrap.css';

syntax jsx rule: style={{"color":"red"}} double curly braces
_________________________________________________________________________________________________________________________________________

Data and component
Since component is object, which can have data.

supply data to component
placeholder {javascriptexpression}
>variable {name}
>hardcoded {"nj"}
>functioncall {getName()}
>objectproperty {user.name}

2 ways to inject data
props
state

?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

React.js:

What is React.js?
React.js is lib for building User interfaces using javascript.
>We have other libs and frameworks to build user interface.
jquery,angular,ember,dojo,extjs,vue,jade,ejs......................

Why should i select react?
  React is usefull for building application which is having huge
  data which are changed over period of time.
  React for large dataset which are changing rapidly

How react.js achive performance related to data changes?
>React uses concept called "Virtual DOM".

What is DOM?
Document Object Model is spec from w3c to represent document
structures in source and in runtime.

HTML is DOM implementation programming language,used to create
web documents.

HTML Basic grammer:
>HTML Document is created by using concept called tags / markup
 <h1>
>HTML Document is not case sensitive
>HTML Document is collection of markups called "elements"
>HTML is programming language,has a compiler, HTML Parser built inside webbrowsers.

Program:
>source code - passive code
        The code which is in harddisk
>runtime code - active code
        The code which is main memoery(ram) - process
The code which is in ram has structure.
The html is loaded into ram,creates structure called "Tree",
called as DOM tree.
DOM tree is written using c language. Linked list

DOM Programming using pure javascript:
......................................
>create h1 element dynamically

<body>  ----HTMLDocument -class for <body> node

function HTMLDocument(){
   this.createElement=function(element){
           //code for create node
           return Node //created node Object
   };
   this.getElementById = function(id){
       return Node;
   }
}
var document = new HTMLDocument();
var h1Node=document.createElement('h1')


/**
 * How to create dom element using javascript!.
 */

document.body.onload = addElement;

function addElement() {
    // create a new h1 element 
    var newH1 = document.createElement("h1");
    // and give it some content 
    var newContent = document.createTextNode("Hi there and greetings!");
    // add the text node to the newly created div
    newH1.appendChild(newContent);

    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("root");
    //document.body.insertBefore(newH1, currentDiv);
    currentDiv.appendChild(newH1);
}

Flow:

 <h1>Hi there and greetings!</h1>; 1
             |
    React.createElement() 5
            |
    document.createElement() 10
           |
       Javascript Native Code 20
          |
     Browser Node 30
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
React lib is used to build from simple to complex DOM elements.
React distributes libs as npm dependencies.
react,reactDOM

export,export default

react -  which provides basic dom element creation 
apis.
reactDOM  - which provides basic dom insertion api.
render.
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

How to create DOM element/elements?
Two ways:
>impertive programming
 Writing more code to create dom elements
  eg: javascript,jquery
document.body.onload = addElement;

function addElement() {
    // create a new h1 element 
    var newH1 = document.createElement("h1");
    // and give it some content 
    var newContent = document.createTextNode("Hi there and greetings!");
    // add the text node to the newly created div
    newH1.appendChild(newContent);

    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("root");
    //document.body.insertBefore(newH1, currentDiv);
    currentDiv.appendChild(newH1);
}
>Declartive programming
 2008 Angular js introduced declarative javascript programming.
Dont write boiler plate code- write less code use always html like syntax.

React is declartive programming lib.

>>>>>>>
Impertive coding using react.js
/**
 * Imperative coding using react!
 */
import React from 'react';
import ReactDOM from 'react-dom';

//Impertive way to create dom element.
const newH1 = React.createElement(
    "h1",
    null,
    "Hello"
);
ReactDOM.render(newH1, document.getElementById('root'));
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

JSX - javascript and XML:
  It is sublanguage to create DOM elements.
  JSX is not understandable by browser so must be compiled down to
javascript.
   JSX is compiled by babel compiler
JSX is used for creating dom elements declarativly.

Component:
  Component is object,which represents UI interface elements.

How to create Component in React()?
>variable pattern
>functional pattern
>class pattern

import React from 'react';
import ReactDOM from 'react-dom';

//Component creational Pattern
//>variable pattern
/* const welcome = <h1>Welcome</h1>;
ReactDOM.render(welcome, document.getElementById('root')); */
//Functional pattern
/**
 * Using javascript function
 *  you have to declare class using function
 *  >es 5 function
 *  >es 6 Arrow
 */
//es 5 function
/* function Welcome() {
    
    return (<h1>Welcome</h1>);
} */
//es 6 arrow function
//const Welcome = () => <h1>Welcome</h1>;
//es 6 class pattern

class Welcome extends React.Component{
 //over ride React.Component class render method
    render() {
        return (<h1>Welcome</h1>);
    }   
}

ReactDOM.render(<Welcome/>, document.getElementById('root')); 
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Every Component  class (Object) has parent class 
"React.Component"

React.Component class:
.....................
>instance variables
 props,state

>instance methods
render()
componentWillMount()
componentDidMount()
componentWillReceiveProps()
shouldComponentUpdate()
componentWillUpdate()
componentDidUpdate()
componentWillUnmount()
setState()
forceUpdate()

>static variables,methods
defaultProps
displayName

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/**
 * Composing multiple elements and basic jsx rules
 * 
 * Javascript and Xml Rules:
 * >You must have one single parent (root)
 * >opened element must be closed
 *    <p>Hello</p>
 *    <hr/>
 * >elements are case sensitive
 */
import React from 'react';
import ReactDOM from 'react-dom';
/* const welcome = (<div><h1>Welcome</h1>
                  <hr/>
                 <h2>Hello</h2></div>
 ); */
const Welcome = () => (
    <div>
        <h1>Welcome</h1>
    <hr/>
        <h2>Hello</h2>
    </div>);

 ReactDOM.render(<Welcome/>, document.getElementById('root')); 
 
 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 How to build Complex Components?

 As per React pattern, you have to build components, and assembly

 Implemetation:
 >Layouts
 >Container
 >Header
 >MainSection
 >Footer
 Think in Html

 <div> -container
     <div> -header</div>
   <div>Section</div>
<div>Footer</div>
</div>

Container.jsx
import { Header } from './Header';
import { MainSection } from './MainSection';
import { Footer } from './Footer';
import React from 'react';

//Container
export const Container = () => (
    <div>
        <Header />
        <MainSection />
        <Footer/>
    </div>    
);
Footer.jsx
import React from 'react';

//Footer
export const Footer = () => (
    <div>
        <h1>Footer</h1>
</div>);

Header.jsx
import React from 'react';

//Header
export const Header = () => (
    <div>
        <h1>Header</h1>
</div>);

MainSection.jsx
import React from 'react';

//Section Component
export  const MainSection = () => (
    <div>
    <h1>Main Section</h1>
</div>);
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
CSS :Styling Your Components:
HOw to add css to html element
>style,class - attributes
<h1 class="myheading"></h1>
<p style="color:red"></p>

How to add style to React Application?
>Global styles
 style is added in index.html using
  <link href="app.css">
>Component specific style
  import "./App.css"

>jsx rules for html attributes/property?

html attributes must be camel cased:
class -html   className -jsx

How to integrate third party css lib - bootStrap?
/**
 * Styling
 * <div className="container">
 *  Here class is attribute
 * You should not name class directly
 * className ,customerName
 * BootStrap:
 * npm install react-bootstrap --save
   npm install bootstrap --save
   import 'bootstrap/dist/css/bootstrap.css';
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from './Container';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<Container/>, document.getElementById('root')); 
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Adding style attribute:

<h1 style={{"color":"red"}}>Main Section</h1>

import React from 'react';

//Section Component
export  const MainSection = () => (
    <div>
    <h1 style={{"color":"red"}}>Main Section</h1>
</div>);
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Data and Component:
Since Component is Object,which can have data.

How to represent data inside Component  or How to supply data 
to Component?
How to assoicate data inside html?

react uses place holder {javascriptexpression}
javascript expression could be
>variable  - {name}
>Hardcoded values - {"Subramanian"}
>functioncall {getName()}
>objectproperty {user.name}

Data can be given to component in React two ways
>props
>state











If h1 is an object it will have data and method
<h1 style="" class="" src=""> style, class src are instance variables which can be initialised in 2 ways: imperative, declarative
 style, class src all are attribute inbuilt
 custom attributes are property

all properties are set in props variable

Object Augmentation::
In JS every object stores data in key-value pair 
Making object dynamic during run time.
Adding, removing, udating, iterating


React unique pattern ::: Data flow and React:
React takes data as prop
parent and child /Master / Detail
single direction data flow model
passing data : parent->child - via props

Component design guidelines:
1. Component must be designed as separate parts, later composed
2. the components must be isolated

state can be used only used in class pattern
1. Stateful component --->state | Class
2. stateless --->props | Function 
in variable pattern state and props cant be accessed, its usd to create tiny objects


                                View
         ________________________|____________________________
        |                                                     |
     Default                                             UI Intercation
                                                            Events


Code --> Event Layer, Synthetic event(class in react) --> DOM event(talks to OS underneath)
            Abstraction layer provided by react

DOM mutation/update
Virtual DOM
RENDER CYCLE::take snapshot of prev DOM --> calculate diff with current DOM 'diff algorithm' --> then update
lexical tree --> emitted by compiler of JS and HTML
Component->render() method is creating virtual DOM
ReactDOM.render(<Counter />, root); -->Physical dom insertion

in functional pattern render() is hidden but present
setState -->change data and calls render method --> hook method
if you call render directly --> react will fail to create virtual DOM 


How to read DOM node value from React
-------------------------------------
<input type="text">
2 patterns
1. through event (SyntheticEvent Object)  
2. through DOM Ref Attribute (it gets DOM object directly) no advisable to use-->third party lib(like jQuery) integration can be done by using only this pattern

SyntheticEvent is layer b/w react and dom --< SyntheticEvent.target will return DOM object which can be stored in variable(v)
                                              v.<>,values

Component classification based on DOM manipulation
1. controlled - event
2. uncontrolled - ref

Array and React 
--------------------
<ul><li> - listview
<tablr><tr> - gridview
<div> - cardview
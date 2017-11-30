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

Component Life Cycle & AJAX:
Writing AJAX inside react in not useful??

Life Cycle(APIs):
1. Mount Phase
2. Update Phase
3. UnMount Phase --> useful while reloading, memory deloctaion

AJAX : Async Javascript and XML
-------------------------------

XmlHttpRequest -- Socket object talks to the server -- difficult to use
jQuery provided wrapper to reduce code
React provides no wrapper, third party wrapper are used
now fetch is used instead of jQuery XmlHttpRequest -- Fetch API
fetch:
alternate to XmlHttpRequest. now built-in API inside most browsers

fetch is powered by promises
>fetch is design pattern
callbackhell -- http://callbackhell.com/ (kind of deadlock)

Soln for callback hell --> Promise object
any aync program can be wrapped by Promise --> provides safety
2016 --> es6 introduced univeral promise for browsers
then() successful execution
catch() failure


//response has data and meta data--> also called payload
two then first for payload second for data
fetch(url).then().then();

shouldCOmponentUpdate --> if false stops rendering


Routing and Navigation, SPA:
----------------------------
location,history - object facilitates client side navigation

react provides routing lib. not core react
reactrouterdom is lib which is third party but reconized lib for navigation
 >> built-in component and objects

npm install react-router-dom --save

click a particular link and display component --> 
history
location 
match

A <Router> may have only one child element --> wrap in div
exact for exact path matching
react provides inbuild component 'Link' for navigation/href

'match' inbuilt variable points to Object --> info about URL --> availlable to component as props

:syntax --> path param


REDUX:::
--------
React is view layer
isolate data part 
redux layer is going to have data
broker library --> comm b/w react and redux
redux design pattern > Immutability

pure function --> returns immutable data

concat   vs   push
pure          impure
immutable   

if we use push for huge data ---> inconsistency issues
"..." ----> argumemt (spread)
      ----> concat (rest) less lines of code

Redux 'reducer' function
FLOW:
bi-directional data flow
rect to dispatcher and dispatcher talks to reducer | proposal is called 'action'
reducer will have logics like add update delete etc.
Action contains proposal specification like add,update,etc

                Reducer
    _________________________________________
              Redux layer

        Dispatcher (dispatches request)               Store/Repository (data comes after processing from reducer)response
    _________________________________________           (react can data from here)
                    |
                    |
             Action(Request)
                    |
                    |
        ____________|_____________
                React layer


1. There are 2 roles of Store Object -->communication
                                  -->data storage

2. dispatcher is one api from store
3. action is proposal ->literal object -->passed to dispatcher and then reducer
4. dispatching
5. getting data

>>npm install redux --save

subscriber api is called whenever store is updated

how to achieve immutability in redux?
/**
 * Immutablity and Redux
 * Redux:Goal to return always consistent data
 * How to return consistent data?
 *  Immutablity.
 * Immutable Data Structure:
 * 1.When ever any changes happen on literal object /array
 *   we need to return immutable data.
 * Guidelines to Create Immutable data Structure:
 *...............................................

 Array Immutations:

//Immutabilty 

//Array
//1.Add new Item

//Mutable List
/*
let list=[1,2,3];
//Test whether list is mutable or not
Object.freeze(list);
list.push(4);
console.log(list);
                        
console.log(list.concat([4]));

//ES 7 Spread Operator
let newArray = [...list, 4];
console.log(newArray);

//Immutabilty 

//Array
//1.Add new Item

//Mutable List
/*
let list=[1,2,3];
//Test whether list is mutable or not
Object.freeze(list);
list.push(4);
console.log(list);
*/
//Immutable List
let list =[1,2,3];
Object.freeze(list);
console.log(list.concat([4]));
//ES 7 Spread Operator
let newArray = [...list, 4];
console.log(newArray);

///////////////////////////////////////////////////////////////////////////////////////

//Remove element:
//..............

//Remove item
//Using mutating method
const removeCounter = (list, index) => {
  list.splice(index, 1);
  return list;
}
const listBefore = [1,2,3,4,5,6];
Object.freeze(listBefore);
let result = removeCounter(listBefore, 4);
console.log(result);



//Immutable method
const removeCounter = (list, index) => {
  // Old way: -ES 5
  //Remove element based index and after removal merge begining and end of the array 
  // and return new array.
  //return list.slice(0, index).concat(list.slice(index + 1));
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
};
  const listBefore = [15, 10, 20,78,8,90,67];

  Object.freeze(listBefore);
  let result = removeCounter(listBefore, 4);
  console.log(result);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//When you update element:

//How to change item in array
//Array item increment - Mutating method 

const incrementCounter = (list, index) => {
  list[index]++;
  return list;
};
let list = [10];
Object.freeze(list);
console.log(incrementCounter(list, 0));
//Immutable way
const incrementCounter = (list, index) => {
  // Old way:
  // return list
  //  .slice(0, index)
  //  .concat([list[index] + 1])
  //  .concat(list.slice(index + 1));

  // ES6 way:
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
};
let list = [10];
Object.freeze(list);
console.log(incrementCounter(list, 0));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Literal Object Mutatation:
//..........................

const toggleTodo = (todo) => {
  // Mutated version:
  todo.completed = !todo.completed
  return todo;
}

let data = {
  id: 0,
  text: 'Learn Redux',
  completed: true 
};
Object.freeze(data);
console.log(toggleTodo(data));


/*
const toggleTodo = (todo) => {
  // Mutated version:
  todo.completed = !todo.completed
  todo.name = 'Subramanian';
  return todo;
}*/
//Immutable version
/**
const toggleTodo = (todo) => {
  return Object.assign({}, todo, {
    completed: !todo.completed
  });
};
 */
const toggleTodo = (todo) => {
  return {
    ...todo,
      completed: !todo.completed,
      text:'Learn react with Redux'
  };
};

let data = {
  id: 0,
  text: 'Learn Redux',
  completed: true
};
Object.freeze(data);
console.log(toggleTodo(data));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Action:
can be passed in 2 ways:
>passing action literal to dispatch method as an argument
>via "factory method"

Multiple reducer:
multiple reducer can be created but only one store
redux provide api --> combine reducer

curry function is a function which must another function
there can be more than one middleware --> they can call each other --->chaining
middleware types:
>user defined
>logger
>third party
>for ajax -->thunk middleware

for AJAX 4 implemention
1. redux thunk
2. redux saga
3. redux observable
4. redux promise

State(redux)
  |
Binding
  |
View(react)
>npm install react-redux --save

How to write Test Cases?
Mocha --> test run time --> for vanilla javascript
jasmine
jsdom used by react

chai.js --> should.js,expect.js http://chaijs.com/
enzyme library -- http://airbnb.io/enzyme/
npm test

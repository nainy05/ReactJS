/**
 * How to create h1 DOM element using JavaScript
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
 */

document.body.onload = addElement;

function addElement () { 
  // create a new h1 element 
  var newH1 = document.createElement("h1"); 
  // and give it some content 
  var newContent = document.createTextNode("Hi there and greetings!"); 
  // add the text node to the newly created div
  newH1.appendChild(newContent);  // to link nodes

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("root"); 
 // document.body.insertBefore(newH1, currentDiv); //Inserting before root div
    currentDiv.appendChild(newH1);
}
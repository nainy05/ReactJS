import { 
    name 
} from './greeter.js'; //import statement is not supported | browser does not have proper loader | 2 files cannot be loaded | pack of 2 files must be created using webpack
import _ from 'lodash';
import './styles.css';

console.log('Webpack');
console.log("My name is " + name)
console.log("Webpack is watching files....")
console.log("Webpack server is rocking!!!")

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack', 'I am here!!!!!!!!!'], ' ');
    
    //Add CSS to hello webpack
    element.classList.add('hello');
    return element;
}

document.body.appendChild(component());
/**
 * DOM manipulation
 * SyntheticEvent Object Properties
   .....................................

boolean bubbles
boolean cancelable
DOMEventTarget currentTarget
boolean defaultPrevented
number eventPhase
boolean isTrusted
DOMEvent nativeEvent
void preventDefault()
boolean isDefaultPrevented()
void stopPropagation()
boolean isPropagationStopped()
DOMEventTarget target
number timeStamp
string type
Note: SyntenticEvent object is created by React and its reference
is avilable inside event handler
 increment(evt){

 }
 here evt is variable holds , SynthenticEvent Object  Reference
 through which you can access dom element values

/**
 * Controlled and UnControlled Components:
 * How to access DOM object from react?
 * 1.using Synevent object
 *        Controlled Components
 * 2.using ref keyword
 *       UnControlled Components
 *  <input type="text" ref={(txt)=>{}} />
 */


 


import React, { Component } from 'react';
import { render } from 'react-dom';

class TextBox extends Component{

    state = {
        name: 'Your Name',
        address:'Your address'
    }
    onUpdate = this.onUpdate.bind(this);
    onUpdateUnCtrl = this.onUpdateUnCtrl.bind(this);

    onUpdate(event) {
        const inputBox = event.target;
        console.dir(inputBox.value);
         this.setState({
            name:inputBox.value
        }); 
    }
    onUpdateUnCtrl() {
        console.log(this.addressTxt.value);
        this.setState({
            address:this.addressTxt.value
        });
    }

    render() {
        const { name ,address } = this.state;
        return (<div>
            <b>{name}</b><b>{address}</b>
            <br/>
            <input type="text" onKeyUp={this.onUpdate} />
            <br />
            <input type="text" ref={ctrlRef => { 
                this.addressTxt = ctrlRef;
            } }  onKeyUp={this.onUpdateUnCtrl}/>
            
        </div>);
    }
}
render(<TextBox />, root);
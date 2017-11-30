
import React, {
    Component
} from 'react';
import {
    render
} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

class Form extends Component {
    state = {
        id : 1,
        name: 'Subramanian',
        powers: ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'
        ],
        power:'',
        shouldHide: true
    }
    handleSubmit = this.handleSubmit.bind(this);
    handleChange = this.handleChange.bind(this);
    onPowersChange = this.onPowersChange.bind(this);

    handleChange(e) {
        if (e.target.value === '') {
            this.setState({ shouldHide: false });
        } else {
            this.setState({ shouldHide: true });
            
       }
        this.setState({name: e.target.value});
    }
    onPowersChange(val) {
        console.log(val.target.value);
        this.setState({power:val.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        const data= {
            id: this.state.id,
            name: this.state.name,
            power: this.state.power
            
        };
        console.log(data); 
    }
    render() {
        let { name, powers } = this.state;
        const powersItems = powers.map((power,index) =>
            <option key={index} value={power}>{power}</option>);
        return (
            <div className="container">
              <h1>Hero Form</h1>               
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input  onChange={this.handleChange} type="text" value={name} className="form-control" id="name" required />
                <div  className={this.state.shouldHide ? 'hidden' : ''}>
                     Name is Empty  
                </div>
              
                </div>
                <div className="form-group">
                <label htmlFor="power">Hero Power</label>
                <select onChange={this.onPowersChange} className="form-control" id="power" required>
                        {powersItems}
                </select>
              </div>
              <input type="submit" value="submit"/>
              </form>
                      
            </div>);
    }

}
render(<Form />, root);
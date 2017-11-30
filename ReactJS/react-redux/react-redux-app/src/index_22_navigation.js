import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';

/**
 * http://localhost:3000/topics/react
 * http://localhost:3000/topics/angular
 * http://localhost:3000/topics/es6
 * http://localhost:3000/topics/typescript
 */

const Home = () => <h1>Home</h1>;
const Employee = () => <h1>Employee</h1>;
const Contact = () => <h1>ContactUs</h1>;
const Topic = ({ match }) => (<div>
     {/** 
      const url = `http://example.com/api/topics/${match.params.topicId} `

       fetch(url).then(res=>res.json()).then(topic=>this.setState({
        topic:topic
       }))
    **/}
    <h1>{match.params.topicId}</h1>
</div>)
const Topics = ({ match }) => (<div>
   <h1>Topics</h1>
   <ul>
    <li>
            
     <Link to={`${match.url}/react`}>
       Rendering with React
     </Link>
   </li>
   <li>
     <Link to={`${match.url}/angular`}>
     Rendering with Angular
     </Link>
   </li>
   <li>
     <Link to={`${match.url}/es6`}>
       Working with es6
     </Link>
   </li>
   
    </ul>
    <Route path={`${match.url}/:topicId`} component={Topic} ></Route>   
  </div>);


const App = () => (
    <div>
        <BrowserRouter>
            <div>    
            {/**Navigation Bar **/}
            <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/contactus">contactus</Link></li>
             <li><Link to="/employee">Employee</Link></li>
             <li><Link to="/topics">Topics</Link></li>
          </ul>
    
          <hr/>
                
            <Route path="/" exact component={Home}  ></Route>    
            <Route path="/employee" component={Employee}  ></Route>     
            <Route path="/contactus" component={Contact}  ></Route>     
            <Route path="/topics" component={Topics}  ></Route>     
            
            </div>    
        </BrowserRouter>       
    </div>    
);

render(<App />, root);
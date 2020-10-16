import React from "react";

import { Route, Switch, Link } from 'react-router-dom'

import Home from './Home'
import Pizza from './Pizza'

const App = () => {
  return (
    <div className='App'>
      <nav>
      <h1>Lambda Eats</h1>
      <Link to='/'><button className='nav-button'>Home</button></Link>
      <Link to='/help'><button className='nav-button'>Help</button></Link>
      </nav>
      <div className='page-container'>
          <Route path='/pizza'>
            <Pizza />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
      </div>
      
    </div>
  );
};
export default App;

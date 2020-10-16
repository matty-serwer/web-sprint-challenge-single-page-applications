import React from "react";

import { Route, Link } from 'react-router-dom'

import Home from './Home'
import Pizza from './Pizza'
import Help from './Help'
import Confirmation from './Confirmation'

const App = () => {
  return (
    <div className='App'>
      <nav>
      <h1>Lambda Eats</h1>
      <Link to='/'><button className='nav-button' id='home-button'>Home</button></Link>
      <Link to='/help'><button className='nav-button'>Help</button></Link>
      </nav>
      <div className='page-container'>
          <Route path='/pizza'>
            <Pizza />
          </Route>
          <Route path='/help'>
            <Help />
          </Route>
          <Route path='/confirmation'>
            <Confirmation />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
      </div>
      
    </div>
  );
};
export default App;

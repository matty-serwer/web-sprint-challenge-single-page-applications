import React from "react";
import axios from 'axios';
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Pizza from './Pizza'

const App = () => {
  return (
    <div className='App'>
      <nav>
      <h1>Lambda Eats</h1>
      <button className='nav-button'>Home</button>
      <button className='nav-button'>Help</button>
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

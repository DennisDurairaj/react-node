import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Fibonacci from './components/pages/Fibonacci';

const App = () => 
  <div className='ui container'>
    <Route path='/' exact component={HomePage} />
    <Route path='/fibonacci' exact component={Fibonacci} />
  </div>

export default App;
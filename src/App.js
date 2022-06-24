import './App.css';
import React from 'react';
import { Route } from "react-router-dom";


//IMPORT COMPONENTS

import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import Form from './components/Form/Form.jsx';
import Details from './components/Details/Details';
import ByTemperaments from './components/ByTemperaments/ByTemperaments';
import Created from './components/Created/Created';

function App() {
  
  return (
    <div className="App">
      <Route exact path = "/" component={Landing}/>
      <Route path = "/home" component={Home}/>
      <Route path = "/create" component={Form}/>
      <Route path = "/details/:dogId" render={({match})=> <Details match={match}/>}/>
      <Route path = "/temperament/:temperamentName" render={({match})=> <ByTemperaments match={match}/>}/>
      <Route path = "/mydogs" component={Created}/>
    </div>
  );
}

export default App;

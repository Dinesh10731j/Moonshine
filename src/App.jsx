import { useState } from 'react';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Explore from './components/Explore';
import Stats from './components/Stats';
import Create from './components/Create';
import Signup from './components/Signup';
import Resources from './components/Resources';
import Login from './components/Login';
import NotFound from './components/NotFound';


function App() {

  return (
    <>
      <Router>
      <Routes>
      <Route path='/' Component={Homepage}/>
      <Route path='/stats' Component={Stats}/>
      <Route path='/create' Component={Create}/>
      <Route path='/signup' Component={Signup}/>
      <Route path='/explore' Component={Explore}/>
      <Route path='/resources' Component={Resources}/>
      <Route path='/login' Component={Login}/>
      <Route path='*' Component={NotFound}/>
      </Routes>
        
      </Router>
    </>
  )
}

export default App

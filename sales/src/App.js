import React, {useState} from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './components/auth/Login'
import Dashboard from './components/Dashboard'
import User from './components/User'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Productos from './components/Productos/Productos'



function App() {
  
  const [usuario, asigaUser] = useState(null);

  const handleUser = (user) => {
    console.log(user);
    asigaUser(user);
  }
  

  
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={Login}>
          <Login handleUser={handleUser}/>
        </Route>

        <Route exact path="/dashboard">
          <Dashboard user={usuario} handleUser={handleUser}/>          
        </Route>

        <Route exact path="/user">
          <User user={usuario}/>          
        </Route> 

        <Route exact path="/nuevaCuenta" component={NuevaCuenta}/>
        
        <Route exact path="/productos">
          <Productos user={usuario}/>
        </Route>

      </Switch>
    </Router>
    
  );
}

export default App;

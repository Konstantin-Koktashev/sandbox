import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './features/auth/Login';
import SignUp from './features/auth/Signup';
import Home from './features/home/Home';

function App() {
  return (
    <div className="App">
          <Switch >
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/signup' component={SignUp}></Route>
        <Route exact path='/' component={Home}></Route>
      </Switch>

    </div>
  );
}

export default App;

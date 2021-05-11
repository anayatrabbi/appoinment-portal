import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home'
import Appointment from './Components/Appointment/Appointment/Appointment';
import LogIn from './Components/LogIn/LogIn';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointment/>
          </Route>
          <Route path="/login">
            <LogIn/>
          </Route>
          <Route>
          
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

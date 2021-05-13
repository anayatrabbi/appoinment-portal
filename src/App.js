import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home'
import Appointment from './Components/Appointment/Appointment/Appointment';
import LogIn from './Components/LogIn/LogIn/LogIn'
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';
export const UserContext = createContext();


function App() {
  const [signInUser, setSignInUser] = useState({})
  return (
    
      <UserContext.Provider value={[signInUser, setSignInUser]}>
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
          <Route path="/dashboard/appointment">
            <DashBoard/>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    
  );
}

export default App;

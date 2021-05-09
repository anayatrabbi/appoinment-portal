import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
            <Home></Home>
          </Route>
          <Route>
          
          </Route>
          <Route>
          
          </Route>
          <Route>
          
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <BrowserRouter>
      <div className="App">
        <h1> Friends</h1>
        <div>
          <Link to="/Login">Login</Link>
        </div>
        {localStorage.getItem("token") && (
          <Link to="/protected">Friends List</Link>
        )}
        <Link onClick={logout}>Logout</Link>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

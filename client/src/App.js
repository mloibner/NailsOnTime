import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Booking from "./pages/booking";
import HomePage from "./pages/home";
import LoginPage from "./pages/loginPage";
import Member from "./pages/member";
import Signup from "./pages/signup";
import Schedule from "./pages/schedule"


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/member">
            <Member />
          </Route>
          <Route exact path="/booking">
            <Booking />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


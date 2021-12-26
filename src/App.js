import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Section/Home";
import Login from "./Components/Login-SignUp/Login";
import SignUp from "./Components/Login-SignUp/SignUp";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <SignUp />
        </Route>
      </div>
    </Router>
  );
}

export default App;

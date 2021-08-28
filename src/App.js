import React from "react";
import Home from "./Home";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/service" component={Service}></Route>
          <Route component={Error}></Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;

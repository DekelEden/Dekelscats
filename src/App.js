import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Consult from "./Consult";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function App() {
  return (
    <Router>
      <NavBar />

      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/consult">
            <Consult />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

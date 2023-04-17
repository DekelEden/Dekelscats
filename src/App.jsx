import logo from './logo.svg'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Consult from './Consult'
import Contact from './Contact'
import NavBar from './NavBar'
import Footer from './Footer'
import RouteGuard from './RouteGuard'
import Lecture from './Lecture'

export default function App() {
  return (
    <Router>
      <RouteGuard>
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
            <Route path="/lectures/speaking-cats">
              <Lecture />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </RouteGuard>
    </Router>
  )
}

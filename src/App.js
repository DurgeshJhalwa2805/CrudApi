import React  from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./layout/Navbar.js";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Adduser from "./users/Adduser";
import Edituser from "./users/Edituser";
import Viewuser from "./users/Viewuser";

function App() {
  return (
    <div >
    <Router>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path ="/contact" component={Contact} />
    <Route exact path="/adduser" component={Adduser} />
    <Route exact path="/edituser/:id" component={Edituser} />
    <Route exact path="/viewuser/:id" component={Viewuser} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;

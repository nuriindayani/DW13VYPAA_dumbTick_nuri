import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Contact from "./component/Contact";
import HeaderHome from "./component/HeaderHome";
import Home from "./component/Home";
import CategoryHome from "./component/CategoryHome";
import ContentHome from "./component/ContentHome";
import Login from "./component/Login";
import Events from "./component/Events";
import Footercategory from "./component/Footercategory";
import PageCategory from "./component/PageCategory";
import Chooselocation from "./component/Chooselocation";
import Choosedate from "./component/Choosedate";
import Headercategory from "./component/Headercategory";
import Titlecategory from "./component/Titlecategory";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/headerhome">
            <HeaderHome />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/headercategory">
            <Headercategory />
          </Route>
          <Route path="/pagecategory/:id">
            <PageCategory />
          </Route>
          <Route path="/footercategory">
            <Footercategory />
          </Route>
          <Route path="/titlecategory">
            <Titlecategory />
          </Route>
          <Route path="/categoryhome">
            <CategoryHome />
          </Route>
          <Route path="/contenthome">
            <ContentHome />
          </Route>
          <Route path="/chooselocation">
            <Chooselocation />
          </Route>
          <Route path="/choosedate">
            <Choosedate />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

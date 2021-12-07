import React from "react";
import "./index.css";
import { Switch, BrowserRouter, Redirect, Route } from "react-router-dom";
import Home from "./home/Index";
import Product from "./product/Index";
import About from "./about/Index";
import Project from "./project/Index";
import Contact from "./contact/Index";

export default function BaseRoute() {
  return (
    // <BrowserRouter>
      <Switch>
        <Route path="/product" component={Product} />
        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    // </BrowserRouter>
  );
}

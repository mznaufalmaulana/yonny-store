import React from "react";
import "./index.css";
import { Switch, BrowserRouter, Redirect, Route } from "react-router-dom";
import Home from "./home/Index";
import Product from "./product/Index";
import About from "./about/Index";
import Project from "./project/Index";
import Contact from "./contact/Index";
import ProductDetail from "./product/detail";
import ProjectDetail from "./project/detail";

export default function BaseRoute() {
  return (
    // <BrowserRouter>
    <Switch>
      <Route exact path="/product" component={Product} />
      <Route exact path="/product/detail" component={ProductDetail} />
      <Route exact path="/about" component={About} />
      <Route exact path="/project" component={Project} />
      <Route exact path="/project/detail" component={ProjectDetail} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/" component={Home} />
    </Switch>
    // </BrowserRouter>
  );
}

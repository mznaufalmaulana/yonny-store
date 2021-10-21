import React from "react";
import "./index.css";
import { Switch, BrowserRouter, Redirect, Route } from "react-router-dom";

export default function BaseRoute() {
  return (
    <BrowserRouter>
      <Switch>{/* <Route path="/auth/sign-up" component={Signup} /> */}</Switch>
    </BrowserRouter>
  );
}

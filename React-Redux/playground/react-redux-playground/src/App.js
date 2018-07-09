import React from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={HomePage}/>
        <Route path="/product" component={ProductPage}/>
      </Switch>
    );
  }
}
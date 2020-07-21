import React, { Component } from 'react';
import './App.css';
import ProductPage from './component/productpage';
import ProductDetailPage from './component/productdetailpage';
import { Route, Switch } from "react-router-dom";
import Menu from './component/menunavigation';
import './component/style.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Menu />
        <Switch>
          <Route path="/product" component={ProductDetailPage} />
          <Route path="/" component={ProductPage} />
        </Switch>
      </div>
    )
  }
}

export default App;

import React, { Component } from "react";
import Header from "./components/Header";
import Signin from "./components/auth/Signin";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="normal">
            <Switch>
              <Route exact path="/" component={Header} />
              <Route path="signin" component={Signin} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

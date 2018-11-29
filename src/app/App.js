import React, { Component } from "react";
import indexPage from "./views/indexPage/indexPage";
import SignIn from "./views/signin/SignIn";
import SignUp from "./views/signup/SignUp";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import history from "./utils/history";
import { Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";

class App extends Component {
  render() {
    let app = null;
    // store.firebaseAuthIsReady().then(() => {
    app = (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={indexPage} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
    // });
    return app;
  }
}

export default App;

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import api from '../api';
console.log(api)
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(api)
      // window.__REDUX_DEVTOOLS_EXTENSION__ &&
      //   window.__REDUX_DEVTOOLS_EXTENSION__(),
    ))
);
export default store;

import { createStore, applyMiddleware, compose } from "redux";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import firebaseConfig from "../config/firebase";
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    reactReduxFirebase(firebaseConfig, {
      userProfile: "users",
      useFirestoreForProfile: true
    }),
    reduxFirestore(firebaseConfig) // redux bindings for firestore
  )
);
console.log(store.firebaseAuthIsReady);
export default store;

import authReducer from "./authReducer";
import wordsReducer from "./wordsReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
const rootReducer = combineReducers({
  auth: authReducer,
  words:wordsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;

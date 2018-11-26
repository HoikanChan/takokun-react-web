import authReducer from "./authReducer";
import wordsReducer from "./wordsReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  auth: authReducer,
  words:wordsReducer,
});

export default rootReducer;

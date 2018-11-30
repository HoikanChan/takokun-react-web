import authReducer from "./authReducer";
import wordsReducer from "./wordsReducer";
import wordBookReducer from "./wordBookReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  auth: authReducer,
  words:wordsReducer,
  wordBook:wordBookReducer,
});

export default rootReducer;

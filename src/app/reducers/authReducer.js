import {
  SEDING_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNOUT_SUCCESS,
  CLEAR_ERROR
} from "../actions/authActions";
const intiState = {
  token: null,
  user: null,
  authorError: null,
  isSendingRequest: false
};
const authReducer = (state = intiState, action) => {
  switch (action.type) {
    case SEDING_REQUEST:
      return {
        ...state,
        isSendingRequest: true
      };
    case LOGIN_ERROR:
      return {
        ...state,
        authError: action.error,
        isSendingRequest: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null,
        isSendingRequest: false
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null,
        isSendingRequest: false
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        authError: action.error,
        isSendingRequest: false
      };
    case SIGNOUT_SUCCESS:
      return state;
    case CLEAR_ERROR:
      return { ...state, authError: null };
    default:
      return state;
  }
};
export default authReducer;

import history from "../utils/history";

export const SEDING_REQUEST = "SEDING_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS";
export const CLEAR_ERROR = "CLEAR_ERROR";
export const signIn = credentials => {
  return async (dispatch, getState, api) => {
    console.log(api)
    dispatch({ type: SEDING_REQUEST });
    try {
      const { user, token } = await api().post("/register", credentials)
      history.push("/");
      dispatch({ type: LOGIN_SUCCESS, user, token });
    } catch (error) {
      dispatch({ type: LOGIN_ERROR, error: error.message });
    }
  };
};
export const signUp = newUser => {
  return async (dispatch, getState, api) => {
    dispatch({ type: SEDING_REQUEST });
    try {
      const { user, token } = await api().post("/register", newUser)
      history.push("/");
      dispatch({ type: SIGNUP_SUCCESS, user, token });
    } catch (error) {
      dispatch({ type: SIGNUP_ERROR, error: error.message });
    } 
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    debugger
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGNOUT_SUCCESS });
      });
  };
};

export const clearError = () => {
  return dispatch => {
    dispatch({ type: CLEAR_ERROR });
  };
};

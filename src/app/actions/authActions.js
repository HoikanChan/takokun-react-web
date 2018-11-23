import history from "../utils/history";

export const SEDING_REQUEST = "SEDING_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS";
export const CLEAR_ERROR = "CLEAR_ERROR";
export const signIn = credentials => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    dispatch({ type: SEDING_REQUEST });

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        history.push("/");
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(error => {
        debugger;
        dispatch({ type: LOGIN_ERROR, error: error.message });
      });
  };
};
export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    dispatch({ type: SEDING_REQUEST });
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(res => {
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            name: newUser.name
          });
      })
      .then(() => {
        dispatch({ type: SIGNUP_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: SIGNUP_ERROR, error: err.message });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
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

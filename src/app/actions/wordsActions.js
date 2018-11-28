// import { notification } from "antd";
// import translate from "../utils/translate.js";

export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_ERROR = "ADD_ERROR";
export const SEARCH_WORD = "SEARCH_WORD";
export const CLEAR_WORD = "CLEAR_WORD";
export const addWord = wordId => {
  return async (dispatch, getState, api) => {
    try {
      await api().post("bookmarks", { wordId });
    } catch (error) {
      console.log(error);
    }
  };
};
export const searchWord = word => {
  return async (dispatch, getState, api) => {
    try {
      if (word) {
        const wordDetail = (await api().get(`words/${word}`)).data;
        dispatch({ type: SEARCH_WORD, wordDetail });
      } else {
        dispatch({ type: CLEAR_WORD });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

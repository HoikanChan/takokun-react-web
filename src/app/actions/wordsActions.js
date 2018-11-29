export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_ERROR = "ADD_ERROR";
export const SEARCH_WORD = "SEARCH_WORD";
export const CLEAR_WORD = "CLEAR_WORD";
export const BOOKMARK_WORD = "BOOKMARK_WORD";
export const UNBOOKMARK_WORD = "UNBOOKMARK_WORD";

export const addWordFav = wordId => {
  return async (dispatch, getState, api) => {
    try {
      await api().post("bookmarks", wordId);
      dispatch({ type: BOOKMARK_WORD });
    } catch (error) {
      console.log(error);
    }
  };
};
export const removeWordFav = wordId => {
  return async (dispatch, getState, api) => {
    try {
      await api().delete("bookmarks", { params: wordId });
      dispatch({ type: UNBOOKMARK_WORD });
    } catch (error) {
      console.log(error);
    }
  };
};
export const searchWord = word => {
  return async (dispatch, getState, api) => {
    try {
      if (word) {
        let params = {};
        const user = getState().auth.user;
        const wordDetail = (await api().get(`words/${word}`, {
          params
        })).data;
        if (user) {
          params.userId = getState().auth.user._id;
          const fav = (await api().get("bookmarks", {
            params: {
              wordId: wordDetail._id
            }
          })).data;
          wordDetail.fav = !!fav.length;
        }
        dispatch({ type: SEARCH_WORD, wordDetail });
      } else {
        dispatch({ type: CLEAR_WORD });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

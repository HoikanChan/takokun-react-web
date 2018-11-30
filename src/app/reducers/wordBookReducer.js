import {
  ADD_SUCCESS,
  BOOKMARK_WORD,
  UNBOOKMARK_WORD,
  SEARCH_WORD,
  CLEAR_WORD
} from "../actions/wordsActions";
const intiState = {
  error: null,
  workBook: [],
  loading: false
};
const wordBookReducer = (state = intiState, action) => {
  let wordDetail = null;
  switch (action.type) {
    case BOOKMARK_WORD:
      wordDetail = { ...state.wordDetail, fav: true };
      return {
        ...state,
        wordDetail
      };
    case UNBOOKMARK_WORD:
      wordDetail = { ...state.wordDetail, fav: false };
      return {
        ...state,
        wordDetail
      };
    case ADD_SUCCESS:
      return {
        ...state,
        isSendingRequest: false
      };
    case SEARCH_WORD:
      return {
        ...state,
        wordDetail: action.wordDetail,
        isSendingRequest: false
      };
    case CLEAR_WORD:
      return {
        ...state,
        wordDetail: null
      };
    default:
      return state;
  }
};
export default wordBookReducer;

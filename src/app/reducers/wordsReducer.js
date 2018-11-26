import {
    ADD_SUCCESS,
    ADD_ERROR, SEARCH_WORD
} from "../actions/wordsActions";
const intiState = {
    error: null,
    wordDetail: null
};
const authReducer = (state = intiState, action) => {
    switch (action.type) {
        case ADD_ERROR:
            return {
                ...state,
                isSendingRequest: false
            };
        case ADD_SUCCESS:
            return {
                ...state,
                isSendingRequest: false
            };
        case SEARCH_WORD:
            return {
                ...state,
                wordDetail: { ...action.wordDetail, fav: action.isFav },
                isSendingRequest: false
            };
        default:
            return state;
    }
};
export default authReducer;

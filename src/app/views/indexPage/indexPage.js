import "./indexPage.scss";
import React from "react";
import { debounce } from "loadsh";
import WordExplanation from "../../components/wordExplanation/WordExplanation";
import Header from "../../components/header/Header";
import { Input } from "antd";
import { connect } from "react-redux";
import { signOut } from "../../actions/authActions";
import {
  addWordFav,
  removeWordFav,
  searchWord
} from "../../actions/wordsActions";

function indexPage({ user, signOut, addWordFav,removeWordFav, wordDetail, searchWord }) {
  const handleChange = debounce(async word => {
    searchWord(word);
  }, 500);
  return (
    <div>
      <Header user={user} signOut={signOut} />
      <div className="main-content">
        <h1>单词君</h1>
        <div>
          <Input
            className="word-input"
            onChange={e => handleChange(e.target.value)}
          />
        </div>
        <div className="explanation">
          {wordDetail ? (
            <WordExplanation
              detail={wordDetail}
              addWordFav={addWordFav}
              removeWordFav={removeWordFav}
            />
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    user: state.auth.user,
    wordDetail: state.words.wordDetail
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
    addWordFav: word => dispatch(addWordFav(word)),
    removeWordFav: word => dispatch(removeWordFav(word)),
    searchWord: word => dispatch(searchWord(word))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(indexPage);

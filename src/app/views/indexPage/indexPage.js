import "./indexPage.scss"
import React from "react";
import { debounce } from "loadsh";
// eslint-disable-next-line
import translate from "../../utils/translate.js";
import WordExplanation from "../../components/wordExplanation/WordExplanation";
import Header from "../../components/header/Header";
import { Input } from 'antd';
import { connect } from "react-redux";
import { signOut } from "../../actions/authActions"
import { addWord, searchWord } from "../../actions/wordsActions"

function indexPage({ profile, auth, signOut, addWord, wordDetail ,searchWord}) {
  const handleChange = debounce(async word => {
    searchWord(word)
  }, 500);
  // return <input className="new" onChange={_.debounce(handleChange, 500)} />;
  return (
    <div>
      <Header name={profile.name} uid={auth.uid} signOut={signOut} />
      <div className="normal">
        <h1>单词君</h1>
        <div>
          <Input className="new" onChange={e => handleChange(e.target.value)} />
          {wordDetail ? <WordExplanation detail={wordDetail} addWord={addWord} /> : <div />}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    wordDetail: state.words.wordDetail
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
    addWord: word => dispatch(addWord(word)),
    searchWord: word => dispatch(searchWord(word)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(indexPage);

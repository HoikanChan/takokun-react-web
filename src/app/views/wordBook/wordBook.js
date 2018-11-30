import "./wordBook.scss";
import React, { useEffect } from "react";
import Header from "../../components/header/Header";
// import { Input } from "antd";
import { connect } from "react-redux";
import { signOut } from "../../actions/authActions";
// import history from "../../utils/history";
import { getWordBook } from "../../actions/wordBookActions";

function WordBook({ user, signOut, getWordBook, wordDetail }) {
  useEffect(() => {
    getWordBook()
  });
  return (
    <div>
      <Header user={user} signOut={signOut} />
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
    getWordBook: word => dispatch(getWordBook(word))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordBook);

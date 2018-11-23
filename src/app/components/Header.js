import WordInput from "./words/WordInput";
import "./Header.scss"
import React from "react";

function Header() {
  return (
    <div className="normal">
      <header>
        <h1>单词君</h1>
        <WordInput />
      </header>
    </div>
  );
}
export default Header;

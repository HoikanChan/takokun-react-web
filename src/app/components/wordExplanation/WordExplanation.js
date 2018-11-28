import React from "react";
import "./WordExplanation.scss";
import PropTypes from "prop-types";
WordExplanation.propTypes = {
  addWord: PropTypes.func,
  detail: PropTypes.object
};
export default function WordExplanation({ detail, addWord }) {
  console.log(detail);
  const { _id, wordDetail } = detail;
  const explainsDiv = wordDetail.basic ? (
    wordDetail.basic.explains.map((explains, index) => (
      <div className="explain" key={index}>
        {explains}
      </div>
    ))
  ) : (
    <div />
  );
  // eslint-disable-next-line
  function addStar(e) {
    addWord({
      word: wordDetail.query,
      explains: JSON.stringify(wordDetail.basic)
    });
  }
  const WordExplanation = wordDetail.basic ? (
    <div className="explantion-wrapper">
      <h2>{wordDetail.query}</h2>
      <div className="stage">
        <div className="heart" onClick={addStar} />
      </div>
      <div className="phonetic">
        <span>
          <strong>英：</strong>[{wordDetail.basic["uk-phonetic"]}]
        </span>
        <span>
          <strong>美：</strong>[{wordDetail.basic["phonetic"]}]
        </span>
      </div>
      <div className="explains">{explainsDiv}</div>
    </div>
  ) : (
    <div>暂无数据</div>
  );
  return WordExplanation;
}

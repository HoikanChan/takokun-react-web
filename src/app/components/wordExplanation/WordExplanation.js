import React from "react";
import "./WordExplanation.scss";

import PropTypes from "prop-types";
import classNames from "classnames";
WordExplanation.propTypes = {
  addWordFav: PropTypes.func,
  removeWordFav: PropTypes.func,
  routeToLogin: PropTypes.func,
  detail: PropTypes.object,
  isLogined: PropTypes.bool
};
export default function WordExplanation({
  detail,
  addWordFav,
  removeWordFav,
  routeToLogin,
  isLogined
}) {
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
  function toggleFav(e) {
    if (!isLogined) {
      routeToLogin();
      return;
    }
    if (!detail.fav) {
      addWordFav({
        wordId: _id
      });
    } else {
      removeWordFav({
        wordId: _id
      });
    }
  }
  const WordExplanation = wordDetail.basic ? (
    <div className="explantion-wrapper">
      <h2>{wordDetail.query}</h2>
      <div className="stage">
        <div
          onClick={toggleFav}
          className={classNames("heart", { active: detail.fav })}
        />
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
    <div />
  );
  return WordExplanation;
}

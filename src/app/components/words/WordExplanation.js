import React from "react";
import "./WordExplanation.scss";

export default function WordExplanation(props) {
  console.log(props);
  const detail = props.detail;
  const explains = detail.basic ? (
    detail.basic.explains.map(explains => (
      <div className="explain">{explains}</div>
    ))
  ) : (
    <div>暂无数据</div>
  );
  function addStar(){
    
  }
  const WordExplanation = detail.basic ? (
    <div className="explantion-wrapper">
      <h2>{detail.query}</h2>
      <div className="stage">
        <div className="heart" onClick="addStar"/>
      </div>
      <div className="phonetic">
        <span>
          <strong>英：</strong>[{detail.basic["uk-phonetic"]}]
        </span>
        <span>
          <strong>美：</strong>[{detail.basic["phonetic"]}]
        </span>
      </div>
      <div className="explains">{explains}</div>
    </div>
  ) : (
    <div>暂无数据</div>
  );
  return WordExplanation;
}

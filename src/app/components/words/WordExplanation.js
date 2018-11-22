import React from "react";

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

  const WordExplanation = detail.basic ? (
    <div>
      <h4>{detail.query}</h4>
      <div>
        <span>英：[{detail.basic["uk-phonetic"]}]</span>
        <span>美：[{detail.basic["phonetic"]}]</span>
      </div>
      <div className="explains">{explains}</div>
    </div>
  ) : (
    <div>暂无数据</div>
  );
  return WordExplanation;
}

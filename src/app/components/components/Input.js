import React from "react";
import "./Input.scss";
export default function Input(props) {
  return <input onChagnge={props.onChagnge} className="new" {...props} value="aaa" />;
}

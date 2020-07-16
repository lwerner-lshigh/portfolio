import React from "react";
import Markdown from "react-markdown";
import style from "./TextView.module.css";

function TextView(props) {
  return (
    <Markdown
      className={style.textView}
      source={props.content}
      escapeHtml={false}
    />
  );
}

export default TextView;

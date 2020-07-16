import React from "react";
import style from "./ImageView.module.css";

function ImageView(props) {
  return (
    <div className={style.imageView}>
      <img
        alt=""
        src={props.src}
        className={props.tall === true ? style.tall : style.wide}
      />
      <p>{props.desc}</p>
    </div>
  );
}

export default ImageView;

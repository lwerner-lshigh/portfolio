import style from "./AttachmentsFilesView.module.css";
import React from "react";
import FileView from "./FileView";

function AttachmentsFilesView(props) {
  return (
    <div className={style.attachmentsFilesView}>
      {props.files.map((file) => {
        return <FileView file={file.file} type={file.type} />;
      })}
    </div>
  );
}

export default AttachmentsFilesView;

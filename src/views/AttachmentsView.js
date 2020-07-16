//import style from './AttachmentsView.module.css'
import React from "react";
import TextView from "./TextView";
import AttachmentsFilesView from "./AttachmentsFilesView";

function AttachmentView(props) {
  return (
    <div>
      <TextView content={props.content} />
      <AttachmentsFilesView files={props.files} />
    </div>
  );
}

export default AttachmentView;

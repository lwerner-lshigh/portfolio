import React from "react";
//import { useMorph } from 'react-morph';
import TextView from "./TextView";
import MultimediaView from "./MultimediaView";
import ImageCollection from "./ImageCollection";
import AttachmentView from "./AttachmentsView";

function PostContent(props) {
  /*const morph = useMorph({
        spring: {
          restDisplacementThreshold: 0.0001,
          overshootClamping: true,
        },
      });*/

  if (props.type === "text") {
    return <TextView content={props.content} />;
  } else if (props.type === "multimedia") {
    return (
      <MultimediaView
        images={props.content.images}
        content={props.content.text}
      />
    );
  } else if (props.type === "photos") {
    return <ImageCollection images={props.content} />;
  } else if (props.type === "attachments") {
    return (
      <AttachmentView
        files={props.content.files}
        content={props.content.text}
      />
    );
  }
}
export default PostContent;

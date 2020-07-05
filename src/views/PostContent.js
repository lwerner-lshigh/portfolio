import React, { useState } from 'react'
import { useMorph } from 'react-morph';

function PostContent(props) {
    const morph = useMorph({
        spring: {
          restDisplacementThreshold: 0.0001,
          overshootClamping: true,
        },
      });

    return props.content instanceof Array ? (
        props.content.map(item => {
            return (<div className="center page">
                <div className="post-image">
                    <div className="center">
                        <img src={item.image} alt={item.content}/>
                    </div>
                    <p>{item.content}</p>
                </div>
            </div>)
        })
    ) : (
        <div {...morph} className="content">
            <p {...morph} >{props.content}</p>
        </div>
    );
}
export default PostContent
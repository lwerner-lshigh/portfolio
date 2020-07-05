import React, { useState } from 'react'
import { useMorph } from 'react-morph';
import './PostView.css'

function PostView(props) {
    const [large, setToggle] = useState(false);
    const morph = useMorph({
        spring: {
          restDisplacementThreshold: 0.0001,
          overshootClamping: true,
        },
      });

    return large ? (
        <div {...morph}  className="post-large" onClick={() => setToggle(!large)}>
            <div {...morph} className="header">
                <div  className="center" id="back">
                    <img  src={props.image} alt={props.title} className={props.imgFit} />
                </div>
                <div className="header-content">
                    <h1 >{props.name}</h1>
                </div>
            </div>
            <div {...morph} className="content">
                <p {...morph} >{props.content}</p>
            </div>
        </div>
    ) : (
    <div {...morph} className="post" onClick={() => setToggle(!large)}>
                <div {...morph} className="center" id="back">
                    <img  src={props.image} alt={props.title} className={props.imgFit}/>
                </div>
                <div {...morph} className="post-content">
                    <h1 {...morph}>{props.name}</h1>
                    <h3 {...morph}>{props.desc}</h3>
                </div>
    </div>
    );
}

export default PostView
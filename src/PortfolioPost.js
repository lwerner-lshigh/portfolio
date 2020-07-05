import React from 'react'
import './PortfolioPost.css'

function PortfolioPost(props) {
    return (
    <div className="post">
                <div className="center" id="back">
                    <img src={props.image} alt={props.title} className={props.imgFit}/>
                </div>
                <div className="post-content">
                    <h1>{props.name}</h1>
                    <h3>{props.desc}</h3>
                </div>
    </div>);
}

export default PortfolioPost
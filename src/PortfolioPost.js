import React from 'react'
import './PortfolioPost.css'

function PortfolioPost(props) {
    return (
    <div className="post" style={{
        backgroundImage: `url(${props.image})`,
        backgroundPosition: "center"
    }}>
            <div className="post-content">
                <h1>{props.name}</h1>
                <h3>{props.desc}</h3>
            </div>
    </div>);
}

export default PortfolioPost
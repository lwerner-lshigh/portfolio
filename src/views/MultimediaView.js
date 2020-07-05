import './ImageCollection'
import React from 'react'
import style from './MultimediaView.module.css'
import ImageCollection from './ImageCollection'
import TextView from './TextView'

function MultimediaView(props) {
    return (
        <div className={style.multimediaView}>
            <ImageCollection images={props.images}/>
            <TextView content={props.content}/>
        </div>
    )
}

export default MultimediaView
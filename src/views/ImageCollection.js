import React from 'react'
import style from './ImageCollection.module.css'
import ImageView from './ImageView'

function ImageCollection(props) {
    console.log(props)
    return (<div className={style.imageCollection}>
        {
            props.images.map(image => (
                <ImageView src={image.src} desc={image.desc} />
            ))
        }
    </div>)
}

export default ImageCollection
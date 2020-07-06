import style from './FileView.module.css'
import React from 'react'

const file = (<img src="icons/file.png" alt="file"/>)
const code = (<img src="icons/code.png" alt="code"/>)
const driveFile = (<img src="icons/drive-file.png" alt="driveFile"/>)
const pdf = (<img src="icons/pdf.png" alt="pdf"/>)
const zip = (<img src="icons/zip.png" alt="zip"/>)
const image = (<img src="icons/image.png" alt="image" />)


function FileView(props) {
    let icon = file
    if (props.type === "code") {icon = code;} 
    else if (props.type === "driveFile") {icon = driveFile}
    else if (props.type === "pdf") {icon = pdf}
    else if (props.type === "zip") {icon = zip}
    else if (props.type === "image") {icon = image}

    return (<a href={props.file} download>
        <div className={style.fileView}>
            <div className="center">
                {icon}
            </div>
            <p>{props.file}</p>
        </div>
    </a>)
}

export default FileView
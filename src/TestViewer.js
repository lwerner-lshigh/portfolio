import React from 'react';
import './views/ImageCollection'
import ImageCollection from './views/ImageCollection';
import MultimediaView from './views/MultimediaView';
import TextView from './views/TextView';
import FileView from './views/FileView';
import './TestViewer.css'
import AttachmentsFilesView from './views/AttachmentsFilesView';

const testCollection = [
    {
        "src": "barn.jpg",
        "desc": "A barn in front of some mountains."
    },
    {
        "src": "trees.jpg",
        "desc": "Some sticks everywhere."
    }
]
const testText = `# Some markdown \n hi ok hihihi`

const filesTest = [
  {
    "file": "barn.jpg",
    "type": "image"
  },
  {
    "file": "trees.jpg",
    "type": "driveFile"
  }
]

function App() {
  return (
    <div>
        <header>
            <div className="center">
              <img src="icons/drill.svg" className="logo" alt="drill"/>
            </div>
            <div className="center">
              <h1>Under Construction | Testing page</h1>
            </div>
        </header>
        <ImageCollection images={testCollection}/>
        <hr />
        <MultimediaView images={testCollection} content={testText}/>
        <hr />
        <TextView content={testText} />
        <hr />
        <FileView file="barn.jpg" type="file"/>
        <hr />
        <AttachmentsFilesView files={filesTest}/>
    </div>
  );
}

export default App;

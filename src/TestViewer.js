import React from 'react';
import './views/ImageCollection'
import ImageCollection from './views/ImageCollection';
import MultimediaView from './views/MultimediaView';
import TextView from './views/TextView';

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


function App() {
  return (
    <div>
        <ImageCollection images={testCollection}/>
        <hr />
        <MultimediaView images={testCollection} content={testText}/>
        <hr />
        <TextView content={testText} />
    </div>
  );
}

export default App;

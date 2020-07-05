import React from 'react';
import './views/ImageCollection'
import ImageCollection from './views/ImageCollection';

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


function App() {
  return (
    <ImageCollection images={testCollection}/>
  );
}

export default App;

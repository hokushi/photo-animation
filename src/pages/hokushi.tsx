// src/pages/hokushi.tsx
import React from 'react';
import PhotoScroll from './components/PhotoScroll';

const PhotoExamples=["/IMG_5125.JPG","/IMG_5815.JPG"]

const Hokushi: React.FC = () => {
  return (
    <div>
      <h1>Hokushi Page</h1>
      <p>This is the Hokushi page.</p>
      <p>ミサちゃん可愛い</p>      
      <PhotoScroll title="ご飯食べミサちゃん" photos={PhotoExamples} />
    </div>
  );
};

export default Hokushi;

// src/pages/hokushi.tsx
import React from 'react';
import ImageBox from './components/imageBox';

const Hokushi: React.FC = () => {
  return (
    <div>
      <h1>Hokushi Page</h1>
      <p>This is the Hokushi page.</p>
      <p>ミサちゃん可愛い</p>
      <ImageBox src="/IMG_5125.JPG" alt="Misa" width="200px" height="200px" />
    </div>
  );
};

export default Hokushi;

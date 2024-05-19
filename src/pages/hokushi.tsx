// src/pages/hokushi.tsx
import React from 'react';
import { Box } from '@mui/material';
import PhotoScroll from './components/PhotoScroll';

const PhotoExamples = [
  "/IMG_5125.JPG",
  "/IMG_5815.JPG",
  "/IMG_4318.JPG",
  "/IMG_6076.JPG",
  "/IMG_3230.JPG",
  "/IMG_1537.JPG",
  "/IMG_2541.JPG",
  "/IMG_4711.JPG",
  "/IMG_5113.JPG",
  "/IMG_5814.JPG"
];

const Hokushi: React.FC = () => {
  return (
    <Box sx={{ width: '100vw' }}>
      <h1>写真アニメーション</h1>
      <PhotoScroll title="ご飯食べミサちゃん" photos={PhotoExamples} />
    </Box>
  );
};

export default Hokushi;

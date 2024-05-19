// src/pages/hokushi.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
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
    <Box sx={{ width: '100vw' ,height:"100vw"}}>
      <Typography sx={{ color: "white", fontSize: "32px" }}>写真アニメーション</Typography>
      <PhotoScroll title="ご飯食べミサちゃん" photos={PhotoExamples} />
    </Box>
  );
};

export default Hokushi;

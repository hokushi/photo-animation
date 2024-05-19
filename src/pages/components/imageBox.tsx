// src/pages/hokushi.tsx
import React from 'react';
import { Box } from '@mui/material';

export interface ImageBoxProps {
    /** 画像のURL */
    src?: string;
    alt?: string;
    width?: string
    height?: string;
}

const ImageBox = (props:ImageBoxProps) => {
    const { src, alt, width, height } = props

  return (
    <Box>
       <img src={src} alt={alt} style={{ width: width, height: height }} />
    </Box>
  );
};

export default ImageBox

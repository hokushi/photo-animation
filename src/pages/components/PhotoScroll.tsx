// src/pages/hokushi.tsx
import { Box, Typography } from '@mui/material';
import ImageBox from './Image';

export interface PhotoScrollProps {
    photos: string[];
    title: string;
}

const PhotoScroll = (props:PhotoScrollProps) => {
    const { photos,title } = props

  return (
    <>
    <Box>
        <Typography>{title}</Typography>
    </Box>
    <Box sx={{display:"flex"}}>
        {photos.map((photo) => (
        <ImageBox src={photo} alt="Misa" width="200px" height="200px" />
        ))}             
    </Box>
    </>
  );
};

export default PhotoScroll

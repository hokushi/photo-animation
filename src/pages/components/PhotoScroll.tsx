// src/pages/components/PhotoScroll.tsx
import { Box, Typography } from '@mui/material';
import ImageBox from './Image';

export interface PhotoScrollProps {
  photos: string[];
  title: string;
}

const PhotoScroll: React.FC<PhotoScrollProps> = ({ photos, title }) => {
  return (
    <>
      <Box>
        <Typography>{title}</Typography>
      </Box>
      <Box sx={{ display: 'flex', overflowX: 'auto', width: '100%' }}>
        {photos.map((photo, index) => (
          <ImageBox key={index} src={photo} alt="Misa" width="200px" height="200px" />
        ))}
      </Box>
    </>
  );
};

export default PhotoScroll;

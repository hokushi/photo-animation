import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import PhotoScroll from './components/PhotoScroll';
import NewDirectoryDialog from './components/NewDirectoryDialog';

const initialPhotoExamples = [
  {
    title: 'ご飯食べミサちゃん',
    photos: [
      '/IMG_5125.JPG',
      '/IMG_5815.JPG',
      '/IMG_4318.JPG',
      '/IMG_6076.JPG',
      '/IMG_3230.JPG',
      '/IMG_1537.JPG',
      '/IMG_2541.JPG',
      '/IMG_4711.JPG',
      '/IMG_5113.JPG',
      '/IMG_5814.JPG',
    ],
  },
  {
    title: '怒りミサちゃん',
    photos: [
      '/IMG_5125.JPG',
      '/IMG_5815.JPG',
      '/IMG_4318.JPG',
      '/IMG_6076.JPG',
      '/IMG_3230.JPG',
      '/IMG_1537.JPG',
      '/IMG_2541.JPG',
      '/IMG_4711.JPG',
      '/IMG_5113.JPG',
      '/IMG_5814.JPG',
    ],
  },
];

const Hokushi: React.FC = () => {
  const [photoExamples, setPhotoExamples] = useState(initialPhotoExamples);
  const [newDirectoryDialogOpen, setNewDirectoryDialogOpen] = useState(false);

  const handleNewDirectoryDialogOpen = () => {
    setNewDirectoryDialogOpen(true);
  };

  const handleNewDirectorySubmit = (data: {
    name: string;
    photos: string[];
  }) => {
    const newExample = {
      title: data.name,
      photos: data.photos,
    };
    setPhotoExamples([...photoExamples, newExample]);
  };

  return (
    <>
      <Box sx={{ width: '100vw', height: '100vw', backgroundColor: '#000' }}>
        <Typography sx={{ color: 'white', fontSize: '32px' }}>
          写真アニメーション
        </Typography>
        {photoExamples.map((photoExample, index) => (
          <PhotoScroll
            key={index}
            title={photoExample.title}
            photos={photoExample.photos}
          />
        ))}
        <Button
          onClick={handleNewDirectoryDialogOpen}
          sx={{ color: 'white', fontSize: '24px', mt: 2 }}
        >
          +
        </Button>
      </Box>
      <NewDirectoryDialog
        open={newDirectoryDialogOpen}
        setOpen={setNewDirectoryDialogOpen}
        onSubmit={handleNewDirectorySubmit} // コールバック関数を渡す
      />
    </>
  );
};

export default Hokushi;

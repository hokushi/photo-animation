import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ImageBox from './Image';
import MenuDialog from './MenuDialog';

export interface PhotoScrollProps {
  photos: string[];
  title: string;
}

const PhotoScroll: React.FC<PhotoScrollProps> = ({ photos, title }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let start: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1; // スクロールの速度を調整
      }

      // 一定の時間ごとにスクロール位置をリセットするロジック
      if (
        scrollRef.current &&
        scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2
      ) {
        scrollRef.current.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Typography sx={{ color: 'white' }}>{title}</Typography>
        </Box>
        <MenuIcon
          sx={{ color: 'white', cursor: 'pointer' }}
          onClick={handleClickOpen}
        />
      </Box>
      <MenuDialog open={open} setOpen={setOpen} />
      <Box
        sx={{ display: 'flex', overflowX: 'auto', width: '100%' }}
        ref={scrollRef}
      >
        {photos.concat(photos).map((photo, index) => (
          <ImageBox
            key={index}
            src={photo}
            alt="Misa"
            width="200px"
            height="200px"
          />
        ))}
      </Box>
    </>
  );
};

export default PhotoScroll;

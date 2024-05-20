import { Box, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import ImageBox from './Image';

export interface PhotoScrollProps {
  photos: string[];
  title: string;
}

const PhotoScroll: React.FC<PhotoScrollProps> = ({ photos, title }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // 自動スクロールを実装するための useEffect フック
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
      <Box>
        <Typography sx={{ color: 'white' }}>{title}</Typography>
      </Box>
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

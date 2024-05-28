// src/pages/hokushi.tsx
import { Box } from '@mui/material';

export interface ImageBoxProps {
  /** 画像のURL */
  src?: string;
  /** 画面のALT */
  alt?: string;
  /** 写真の幅 */
  width?: string;
  /** 写真の高さ */
  height?: string;
  /** 拡大表示するかどうか */
  expandImage?: boolean;
}

const ImageBox = (props: ImageBoxProps) => {
  const { src, alt, width, height, expandImage } = props;

  return (
    <Box>
      {expandImage ? (
        <a href={src} target="_blank" rel="noopener noreferrer">
          <img
            src={src}
            alt={alt}
            style={{
              width: width,
              height: height,
              marginLeft: '3px',
              marginRight: '3px',
            }}
          />
        </a>
      ) : (
        <img
          src={src}
          alt={alt}
          style={{
            width: width,
            height: height,
            marginLeft: '3px',
            marginRight: '3px',
          }}
        />
      )}
    </Box>
  );
};

export default ImageBox;

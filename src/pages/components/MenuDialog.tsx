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

export interface MenuDialogProps {
  /** ダイアログを開閉するboolean */
  open: boolean;
  /** 閉じるために渡す */
  setOpen: any;
  /** サイズを変更するために渡す */
  setSize: any;
  /** スピードを変更するために渡す */
  setSpeed: any;
}
const MenuDialog: React.FC<MenuDialogProps> = ({
  open,
  setOpen,
  setSize,
  setSpeed,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleSizeChange = (size: string) => {
    setSize(size);
  };

  const handleSpeedChange = (speed: number) => {
    setSpeed(speed);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{'写真編集'}</DialogTitle>
      <DialogContent>
        <Typography>写真の大きさを選択してください</Typography>
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button onClick={() => handleSizeChange('100px')} variant="outlined">
            100px
          </Button>
          <Button onClick={() => handleSizeChange('200px')} variant="outlined">
            200px
          </Button>
          <Button onClick={() => handleSizeChange('300px')} variant="outlined">
            300px
          </Button>
          <Button onClick={() => handleSizeChange('400px')} variant="outlined">
            400px
          </Button>
        </Box>
      </DialogContent>
      <DialogContent>
        <Typography>アニメーション速度</Typography>
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button onClick={() => handleSpeedChange(1)} variant="outlined">
            遅い
          </Button>
          <Button onClick={() => handleSpeedChange(2)} variant="outlined">
            普通
          </Button>
          <Button onClick={() => handleSpeedChange(3)} variant="outlined">
            速い
          </Button>
          <Button onClick={() => handleSpeedChange(0)} variant="outlined">
            停止
          </Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          閉じる
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MenuDialog;

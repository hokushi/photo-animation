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
}
const MenuDialog: React.FC<MenuDialogProps> = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{'ダイアログタイトル'}</DialogTitle>
      <DialogContent>
        <Typography>ここにダイアログの内容を表示します。</Typography>
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

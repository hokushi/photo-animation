import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import React from 'react';
import StringTextBox from './TextBox';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  name: string;
}

export interface MenuDialogProps {
  /** ダイアログを開閉するboolean */
  open: boolean;
  /** 閉じるために渡す */
  setOpen: (open: boolean) => void;
  /** フォーム送信時に呼ばれるコールバック関数 */
  onSubmit: (data: IFormInput) => void;
}

const NewDirectoryDialog: React.FC<MenuDialogProps> = ({
  open,
  setOpen,
  onSubmit,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInput>();

  const handleClose = () => {
    setOpen(false);
  };

  const submitHandler: SubmitHandler<IFormInput> = (data) => {
    onSubmit(data); // コールバック関数を呼び出してデータを渡す
    handleClose(); // 作成後にダイアログを閉じる
    console.log(data);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <DialogTitle>{'新しいフォルダの作成'}</DialogTitle>
        <DialogContent>
          <StringTextBox
            name="name"
            label="Name"
            control={control}
            rules={{ required: 'Name is required' }}
          />
        </DialogContent>
        <DialogActions
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Button type="submit" variant="contained" color="primary">
            作成
          </Button>
          <Button onClick={handleClose} color="primary">
            閉じる
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default NewDirectoryDialog;

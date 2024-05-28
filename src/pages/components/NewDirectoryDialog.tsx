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
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import StringTextBox from './parts/TextBox';

interface IFormInput {
  name: string;
  photos: string[]; // ファイル名の配列
}

export interface MenuDialogProps {
  open: boolean; // ダイアログを開閉するboolean
  setOpen: (open: boolean) => void; // 閉じるための関数
  onSubmit: (data: IFormInput) => void; // フォーム送信時のコールバック関数
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
          <Controller
            name="photos"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <input
                type="file"
                multiple
                onChange={(e) => {
                  const files = Array.from(e.target.files || []);
                  field.onChange(files.map((file) => file.name));
                }}
              />
            )}
          />
          {errors.photos && <span>ファイルの選択が必要です</span>}
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

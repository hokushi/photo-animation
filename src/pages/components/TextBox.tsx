// TextBox.tsx
import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

interface TextBoxProps {
  name: string;
  label: string;
  defaultValue?: string;
  rules?: object;
  control: any;
}

const StringTextBox: React.FC<TextBoxProps> = ({
  name,
  label,
  defaultValue = '',
  rules = {},
  control,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          sx={{ mt: 2 }}
          label={label}
          variant="outlined"
          error={!!error}
          helperText={error ? error.message : null}
          fullWidth
        />
      )}
    />
  );
};

export default StringTextBox;

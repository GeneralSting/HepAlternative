import { TextField } from "@mui/material";
import { FC } from "react";
import { TextFieldProps } from "../../types/textFieldProps";

const PasswordTextField: FC<TextFieldProps> = ({
  label,
  name,
  helperText,
  disabled,
}) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      name={name}
      label={label}
      type="password"
      id="password"
      autoComplete="current-password"
      helperText={helperText}
      disabled={disabled}
      inputProps={{
        maxLength: 32,
      }}
    />
  );
};

export default PasswordTextField;

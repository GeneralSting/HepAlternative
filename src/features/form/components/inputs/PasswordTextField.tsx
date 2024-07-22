import { TextField } from "@mui/material";
import { FC } from "react";
import { TextFieldProps } from "../../types/textFieldProps";

const PasswordTextField: FC<TextFieldProps> = ({
  label,
  helperText,
  disabled,
}) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      name="password"
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

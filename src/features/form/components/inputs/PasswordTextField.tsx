import { TextField } from "@mui/material";
import { FC } from "react";
import { TextFieldProps } from "../../types/textFieldProps";

const PasswordTextField: FC<TextFieldProps> = ({ label, helperText }) => {
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
    />
  );
};

export default PasswordTextField;

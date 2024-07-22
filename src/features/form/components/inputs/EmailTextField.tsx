import { TextField } from "@mui/material";
import { FC } from "react";
import { TextFieldProps } from "../../types/textFieldProps";

const EmailTextField: FC<TextFieldProps> = ({ label, helperText, disabled }) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id="email"
      label={label}
      name="email"
      autoComplete="email"
      autoFocus
      helperText={helperText}
      disabled={disabled}
      inputProps={{
        maxLength: 64,
      }}
    />
  );
};

export default EmailTextField;

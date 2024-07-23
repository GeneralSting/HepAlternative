import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { FC, useState } from "react";
import { TextFieldProps } from "../../types/textFieldProps";

const TogglePasswordTextField: FC<TextFieldProps> = ({
  label,
  helperText,
  disabled,
  name
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      name={name}
      label={label}
      type={showPassword ? "text" : "password"}
      id="password"
      autoComplete="current-password"
      helperText={helperText}
      disabled={disabled}
      autoFocus
      sx={{marginBottom: "2rem"}}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      inputProps={{
        maxLength: 15,
      }}
    />
  );
};

export default TogglePasswordTextField;

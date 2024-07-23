import { Checkbox, FormControlLabel } from "@mui/material";
import { FC } from "react";
import { TextFieldProps } from "../../types/textFieldProps";

const CheckboxField: FC<TextFieldProps> = ({ label, name }) => {
  return (
    <FormControlLabel
      control={<Checkbox value="true" />}
      label={label}
      name={name}
    />
  );
};

export default CheckboxField;

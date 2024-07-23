import { InputName } from "./inputName";

export type TextFieldProps = {
  label: string;
  name: InputName;
  helperText?: string | false | undefined; // additional types to match i18n requirements
  disabled?: boolean
};

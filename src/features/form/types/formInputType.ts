export type FormInputType = {
  type:
    | "text"
    | "number"
    | "email"
    | "password"
    | "confirmPassword"
    | "togglePassword"
    | "checkbox";
  invalid?: boolean;
  disabled?: boolean;
};

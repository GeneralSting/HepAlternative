export type FormInputProps = {
  type: "text" | "number" | "email" | "password";
  id: string;
  labelText: string;
  firstContainer?: true;
  secondContainer?: true;
};


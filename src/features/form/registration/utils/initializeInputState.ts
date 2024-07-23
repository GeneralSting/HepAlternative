import { RegistrationInputProps } from "../types/registrationInputProps";

const initializeInputState = (
  disabled: boolean,
  invalid: boolean
): RegistrationInputProps => ({
  disabled,
  invalid,
});

export default initializeInputState;

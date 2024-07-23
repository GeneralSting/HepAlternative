import isValidEmail from "../../utils/validateEmail";
import { RegistrationForm } from "../types/registrationForm";
import { RegistrationInputProps } from "../types/registrationInputProps";
import { RegistrationInputType } from "../types/registrationInputType";
import { formInputStatus } from "./formInputsStatus";

const registrationValidation = (
  firstStep: boolean,
  form: RegistrationForm
): Partial<Record<RegistrationInputType, RegistrationInputProps>> => {
  if (firstStep) {
    if (form.registrationCode.length === 15) {
      return formInputStatus("secondRegForm");
    }
    return formInputStatus("invalidRegCode");
  }

  if (!isValidEmail(form.email)) {
    return formInputStatus("invalidEmail");
  }

  if (form.password.length < 8) {
    return formInputStatus("invalidPassword");
  }

  if (form.confirmPassword !== form.password) {
    return formInputStatus("invalidConfirmPassword");
  }

  return formInputStatus("secondRegForm");
};

export default registrationValidation;

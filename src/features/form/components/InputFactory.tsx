import { FC } from "react";
import { FormInputType } from "../types/formInputType";
import { useTranslation } from "react-i18next";
import EmailTextField from "./inputs/EmailTextField";
import PasswordTextField from "./inputs/PasswordTextField";
import CheckboxField from "./inputs/CheckboxField";
import TogglePasswordTextField from "./inputs/TogglePasswordTextField";

const InputFactory: FC<FormInputType> = ({ type, invalid, disabled }) => {
  const { t } = useTranslation();

  switch (type) {
    case "email": {
      return (
        <EmailTextField
          label={t("form.input.emailInput")}
          helperText={invalid && t("form.text.invalidEmail")}
          disabled={disabled}
        />
      );
    }
    case "password": {
      return (
        <PasswordTextField
          label={t("form.input.passwordInput")}
          helperText={invalid && t("form.text.invalidPassword")}
          disabled={disabled}
        />
      );
    }
    case "confirmPassword": {
      return (
        <PasswordTextField
          label={t("form.input.passwordConfirmInput")}
          helperText={invalid && t("form.text.invalidConfirmPassword")}
          disabled={disabled}
        />
      );
    }
    case "togglePassword": {
      return (
        <TogglePasswordTextField
          label={t("form.input.registrationCode")}
          helperText={invalid && t("form.text.invalidRegistrationCode")}
          disabled={disabled}
        />
      );
    }
    case "checkbox": {
      return <CheckboxField label={t("form.input.loginCheckbox")} />;
    }
    default: {
      throw new Error(`Unknown input type: ${type}`);
    }
  }
};

export default InputFactory;

import { FormInputStatus } from "../../types/formInputsStatus";
import { RegistrationInputProps } from "../types/registrationInputProps";
import { RegistrationInputType } from "../types/registrationInputType";

export const formInputStatus = (
  status: FormInputStatus
): Partial<Record<RegistrationInputType, RegistrationInputProps>> => {
  switch (status) {
    // first step: default, all valid
    case "firstRegFrom": {
      return {
        togglePassword: {
          disabled: false,
          invalid: false,
        },
      };
    }

    case "invalidRegCode": {
      return {
        togglePassword: {
          disabled: false,
          invalid: true,
        },
      };
    }

    // second step: default, all valid
    case "secondRegForm": {
      return {
        togglePassword: {
          disabled: true,
          invalid: false,
        },
        email: {
          disabled: false,
          invalid: false,
        },
        password: {
          disabled: false,
          invalid: false,
        },
        confirmPassword: {
          disabled: false,
          invalid: false,
        },
      };
    }

    case "invalidEmail": {
      return {
        email: {
          disabled: false,
          invalid: true,
        },
      };
    }

    case "invalidPassword": {
      return {
        email: {
          disabled: false,
          invalid: false,
        },
        password: {
          disabled: false,
          invalid: true,
        },
      };
    }

    case "invalidConfirmPassword": {
      return {
        email: {
          disabled: false,
          invalid: false,
        },
        password: {
          disabled: false,
          invalid: false,
        },
        confirmPassword: {
          disabled: false,
          invalid: true,
        },
      };
    }
  }
};

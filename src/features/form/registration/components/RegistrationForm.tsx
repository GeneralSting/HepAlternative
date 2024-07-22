import { Fragment, useMemo, useState } from "react";
import { FormInputType } from "../../types/formInputType";
import { useTranslation } from "react-i18next";
import { RegistrationForm as RegistrationFormType } from "../types/registrationForm";
import getFormData from "../../utils/getFormData";
import isValidEmail from "../../utils/validateEmail";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import InputFactory from "../../components/InputFactory";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { RegistrationInputProps } from "../types/registrationInputProps";
import { loginPath, rootRegCodePath } from "../../../../routes";

const RegistartionForm = () => {
  const { t } = useTranslation();

  const [invalidRegistrationCode, setInvalidRegistrationCode] =
    useState<RegistrationInputProps>({
      disabled: false,
      invalid: false,
    });
  const [invalidEmail, setInvalidEmail] = useState<RegistrationInputProps>({
    disabled: true,
    invalid: false,
  });
  const [invalidPassword, setInvalidPassword] =
    useState<RegistrationInputProps>({
      disabled: true,
      invalid: false,
    });
  const [invalidConfirmPassword, setInvalidConfirmPassword] =
    useState<RegistrationInputProps>({
      disabled: true,
      invalid: false,
    });

  const registrationInputs = useMemo<FormInputType[]>(
    () => [
      {
        type: "togglePassword",
        invalid: invalidRegistrationCode.invalid,
        disabled: invalidRegistrationCode.disabled,
      },
      {
        type: "email",
        invalid: invalidEmail.invalid,
        disabled: invalidEmail.disabled,
      },
      {
        type: "password",
        invalid: invalidPassword.invalid,
        disabled: invalidPassword.disabled,
      },
      {
        type: "confirmPassword",
        invalid: invalidConfirmPassword.invalid,
        disabled: invalidPassword.disabled,
      },
    ],
    [
      invalidConfirmPassword.invalid,
      invalidEmail.disabled,
      invalidEmail.invalid,
      invalidPassword.disabled,
      invalidPassword.invalid,
      invalidRegistrationCode.disabled,
      invalidRegistrationCode.invalid,
    ]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const loginFormData: RegistrationFormType = {
      registrationCode: getFormData<RegistrationFormType>(
        data,
        "registrationCode"
      ),
      email: getFormData<RegistrationFormType>(data, "email"),
      password: getFormData<RegistrationFormType>(data, "password"),
      confirmPassword: getFormData<RegistrationFormType>(
        data,
        "confirmPassword"
      ),
    };

    console.log(loginFormData);

    // if (checkFormValidation(loginFormData.email, loginFormData.password)) {
    //   console.log("valid");
    // }
  };

  const checkFormValidation = (
    enteredEmail: string,
    enteredPassword: string
  ): boolean => {
    // Email validation
    if (!isValidEmail(enteredEmail)) {
      setInvalidEmail(true);
      return false;
    } else {
      setInvalidEmail(false);
    }

    // Password validation
    if (enteredPassword.length < 8) {
      setInvalidPassword(true);
      return false;
    } else {
      setInvalidPassword(false);
    }

    return true;
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={16} sx={{ padding: "1rem" }}>
        <Box
          sx={{
            marginTop: 2,
            marginBottom: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "hsl(168, 58%, 43%)" }}>
            <VerifiedUserIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t("form.text.register")}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {registrationInputs.map((input, index) => (
              <Fragment key={index}>
                <InputFactory
                  type={input.type}
                  invalid={input.invalid}
                  disabled={input.disabled}
                />
              </Fragment>
            ))}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "hsl(168, 58%, 43%)",
                "&:hover": {
                  backgroundColor: "hsl(168, 68%, 32%)",
                },
              }}
            >
              {t("form.text.register")}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href={rootRegCodePath} variant="body2" className="energy-green">
                  {t("form.text.registrationCodeLink")}
                </Link>
              </Grid>
              <Grid item>
                <Link href={loginPath} variant="body2">
                  {t("form.text.loginLink")}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default RegistartionForm;

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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useTranslation } from "react-i18next";
import { registrationPath } from "../../../../routes";
import isValidEmail from "../../utils/validateEmail";
import { LoginForm as LoginFormType } from "../types/loginForm";
import getFormData from "../../utils/getFormData";
import { Fragment, useMemo, useState } from "react";
import InputFactory from "../../components/InputFactory";
import { FormInputType } from "../../types/formInputType";

const LoginForm = () => {
  const { t } = useTranslation();

  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const [invalidPassword, setInvalidPassword] = useState<boolean>(false);

  const loginInputs = useMemo<FormInputType[]>(
    () => [
      { type: "email", invalid: invalidEmail },
      { type: "password", invalid: invalidPassword },
      { type: "checkbox" },
    ],
    [invalidEmail, invalidPassword]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const loginFormData: LoginFormType = {
      email: getFormData<LoginFormType>(data, "email"),
      password: getFormData<LoginFormType>(data, "password"),
      cbRemember: getFormData<LoginFormType>(data, "cbRemember"),
    };

    // TODO: implement login backend code validation

    if (checkFormValidation(loginFormData.email, loginFormData.password)) {
      console.log("valid");
    }
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
          <Avatar sx={{ m: 1, bgcolor: "hsl(198, 58%, 43%)" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t("form.text.login")}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {loginInputs.map((input, index) => (
              <Fragment key={index}>
                <InputFactory type={input.type} invalid={input.invalid} />
              </Fragment>
            ))}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "hsl(198, 58%, 43%)",
                "&:hover": {
                  backgroundColor: "hsl(198, 62%, 32%)",
                },
              }}
            >
              {t("form.text.login")}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="" variant="body2">
                  {t("form.text.forgotPassword")}
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href={registrationPath}
                  variant="body2"
                  className="energy-green"
                >
                  {t("form.text.registerLink")}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginForm;

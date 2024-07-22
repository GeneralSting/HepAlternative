import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useTranslation } from "react-i18next";
import { registrationPath } from "../../../routes";
import isValidEmail from "../utils/validateEmail";
import { LoginForm as LoginFormType } from "../types/loginForm";
import getFormData from "../utils/getFormData";
import { useState } from "react";

const LoginForm = () => {
  const { t } = useTranslation();

  const [invalidEmail, setInvalidEmail] = useState<string | null>(null);
  const [invalidPassword, setInvalidPassword] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const loginFormData: LoginFormType = {
      email: getFormData<LoginFormType>(data, "email"),
      password: getFormData<LoginFormType>(data, "password"),
      remember: getFormData<LoginFormType>(data, "remember"),
    };

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
      setInvalidEmail(t("form.text.invalidEmail"));
      return false;
    } else {
      setInvalidEmail(null);
    }

    // Password validation
    if (enteredPassword.length < 8) {
      setInvalidPassword(t("form.text.invalidPassword"));
      return false;
    } else {
      setInvalidPassword(null);
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={t("form.input.emailInput")}
              name="email"
              autoComplete="email"
              autoFocus
              helperText={invalidEmail ? invalidEmail : undefined}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={t("form.input.passwordInput")}
              type="password"
              id="password"
              autoComplete="current-password"
              helperText={invalidPassword ? invalidPassword : undefined}
            />
            <FormControlLabel
              control={<Checkbox value="true" />}
              label={t("form.input.loginCheckbox")}
              name="remember"
            />
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

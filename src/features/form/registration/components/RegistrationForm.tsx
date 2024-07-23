import { Fragment, useEffect, useMemo, useState } from "react";
import { FormInputType } from "../../types/formInputType";
import { useTranslation } from "react-i18next";
import { RegistrationForm as RegistrationFormType } from "../types/registrationForm";
import getFormData from "../../utils/getFormData";
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
import { RegistrationInputType } from "../types/registrationInputType";
import initializeInputState from "../utils/initializeInputState";
import registrationValidation from "../utils/registrationValidation";

const RegistartionForm = () => {
  const { t } = useTranslation();

  const [firstStep, setFirstStep] = useState<boolean>(true);
  const [registrationForm, setRegistrationForm] = useState<
    Record<RegistrationInputType, RegistrationInputProps>
  >({
    togglePassword: initializeInputState(false, false),
    email: initializeInputState(true, false),
    password: initializeInputState(true, false),
    confirmPassword: initializeInputState(true, false),
  });

  const registrationInputs = useMemo<FormInputType[]>(
    () =>
      Object.keys(registrationForm).map((key) => ({
        type: key as RegistrationInputType,
        invalid: registrationForm[key as RegistrationInputType].invalid,
        disabled: registrationForm[key as RegistrationInputType].disabled,
      })),
    [registrationForm]
  );

  const updateRegistrationForm = (
    updates: Partial<
      Record<RegistrationInputType, Partial<RegistrationInputProps>>
    >
  ) => {
    setRegistrationForm((prevForm) => {
      const updatedForm = { ...prevForm };

      for (const [field, properties] of Object.entries(updates) as [
        RegistrationInputType,
        Partial<RegistrationInputProps>
      ][]) {
        updatedForm[field] = {
          ...prevForm[field],
          ...properties,
        };
      }

      return updatedForm;
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const registrationFormData: RegistrationFormType = {
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

    updateRegistrationForm(
      registrationValidation(firstStep, registrationFormData)
    );
    // TODO: implement registration backend code validation
  };

  useEffect(() => {
    if (registrationForm.togglePassword.disabled === true) {
      setFirstStep(false);
    }
  }, [registrationForm.togglePassword.disabled]);

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
              {firstStep
                ? t("form.text.checkRegistrationCode")
                : t("form.text.register")}
            </Button>

            <Grid container>
              <Grid item xs>
                <Link
                  href={rootRegCodePath}
                  variant="body2"
                  className="energy-green"
                >
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

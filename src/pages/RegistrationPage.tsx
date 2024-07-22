import { Grid } from "@mui/material";
import { RegistrationForm } from "../features/form";

const RegistrationPage = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={11} sm={8} lg={4}>
        <RegistrationForm />
      </Grid>
    </Grid>
  );
};

export default RegistrationPage;

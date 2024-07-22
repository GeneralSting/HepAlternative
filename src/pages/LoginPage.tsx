import { Grid } from "@mui/material";
import { LoginForm } from "../features/form";

const LoginPage = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={11} sm={8} lg={4}>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default LoginPage;

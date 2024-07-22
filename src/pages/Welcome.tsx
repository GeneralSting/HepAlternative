import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { loginPath } from "../routes";

const Welcome = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={11} sm={8} lg={4}>
        Hello
        <Link to={loginPath}>
          <Button>Login</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Welcome;

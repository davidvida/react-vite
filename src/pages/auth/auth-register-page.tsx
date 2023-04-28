import React from "react";

const AuthRegisterPage = () => {
  return (
    <>
      <div>Register Page</div>
    </>
  );
};

/*
export default AuthLoginPage;
import React from "react";
import { Form } from "react-final-form";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormButton from "@mui/material/Button";

const AuthRegisterPage = () => {
  const handleSubmit = () => {
    console.log("Register Page");
  };
  return (
    <React.Fragment>
      <React.Fragment>
        <Typography variant="h3" align="center">
          Sign In
        </Typography>
        <Typography variant="body2" align="center">
          {"Not a member yet? "}
          <Link
            href="/premium-themes/onepirate/sign-up/"
            align="center"
            underline="always"
          >
            Sign Up here
          </Link>
        </Typography>
      </React.Fragment>
      <Form onSubmit={handleSubmit} subscription={{ submitting: true }}>
        <Box component="form" sx={{ mt: 6 }}>
          <TextField
            autoComplete="email"
            autoFocus
            fullWidth
            label="Email"
            margin="normal"
            name="email"
            required
          />
          <TextField
            fullWidth
            required
            name="password"
            autoComplete="current-password"
            label="Password"
            type="password"
            margin="normal"
          />
          <FormButton
            sx={{ mt: 3, mb: 2 }}
            size="large"
            color="secondary"
            fullWidth
          ></FormButton>
        </Box>
      </Form>
      <Typography align="center">
        <Link
          underline="always"
          href="/premium-themes/onepirate/forgot-password/"
        >
          Forgot password?
        </Link>
      </Typography>
    </React.Fragment>
  );
};


*/
export default AuthRegisterPage;

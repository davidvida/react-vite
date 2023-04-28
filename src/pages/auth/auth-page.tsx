import React from 'react'
import { Box, Button } from '@mui/material';
import { Link } from "react-router-dom";

const AuthPage = () => {
  return (
    <>
      <h2>Auth Page</h2>
      <br />
      <Box display='flex' flexDirection='column' justifyContent='space-between' height={200}>
        <Link to="/auth/login">
          <Button variant="outlined" color="secondary">Go to Login Page</Button>
        </Link>
        <Link to="/auth/register">
          <Button variant="outlined" color="secondary">Go to Register Page</Button>
        </Link>
        <Link to="/auth/reset-password">
          <Button variant="outlined" color="secondary">Go to Reset password</Button>
        </Link>
      </Box>
    </>
  )
}

export default AuthPage
import { Box, Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react'
import { Link } from "react-router-dom";

const AuthLoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <React.Fragment>
      <Link to="/auth">
        <Button variant="outlined" color="secondary">Back to Auth Page</Button>
      </Link>
      <form autoComplete="off">
        <Stack direction='column' sx={{width: 500}}>
          <h2>Login Form</h2>
          <TextField 
              label="User name"
              onChange={e => setUsername(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="text"
              value={username}
              sx={{mb: 3}}
            />
            <TextField 
              label="Password"
              onChange={e => setPassword(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="password"
              value={password}
              sx={{mb: 3}}
            />
            <Button variant="outlined" color="secondary" type="submit">Login</Button>
        </Stack>
      </form>
      <small>Need an account? <Link to="/auth/register">Register here</Link></small>
    </React.Fragment>
  )
}

export default AuthLoginPage
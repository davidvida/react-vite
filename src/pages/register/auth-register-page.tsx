import { Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react'
import { Link } from "react-router-dom";

const AuthRegisterPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordAgain, setPasswordAgain] = useState("")
  return (
    <React.Fragment>
      <Link to="/auth">
        <Button variant="outlined" color="secondary">Back to Auth Page</Button>
      </Link>
      <form autoComplete="off">
        <Stack direction='column' sx={{width: 500}}>
          <h2>Register Form</h2>
          <TextField 
              label="User name"
              onChange={e => setUsername(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{mb: 3}}
              fullWidth
              value={username}
            />
            <TextField 
              label="Password"
              onChange={e => setPassword(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="password"
              value={password}
              fullWidth
              sx={{mb: 3}}
            />
            <TextField 
              label="Repeat password"
              onChange={e => setPasswordAgain(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="password"
              value={passwordAgain}
              fullWidth
              sx={{mb: 3}}
            />
            <Button variant="outlined" color="secondary" type="submit">Register</Button>
        </Stack>
      </form>
    </React.Fragment>
  )
}

export default AuthRegisterPage
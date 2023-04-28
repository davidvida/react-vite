import { Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react'
import { Link } from "react-router-dom";

const AuthResetPasswordPage = () => {
  const [lastPassword, setLastPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [newPasswordAgain, setNewPasswordAgain] = useState("")
  return (
    <React.Fragment>
      <Link to="/auth">
        <Button variant="outlined" color="secondary">Back to Auth Page</Button>
      </Link>
      <form autoComplete="off">
        <Stack direction='column' sx={{width: 500}}>
          <h2>Reset Password Form</h2>
            <TextField 
                label="Last password"
                onChange={e => setLastPassword(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="password"
                value={lastPassword}
                fullWidth
                sx={{mb: 3}}
              />
            <TextField 
              label="New password"
              onChange={e => setNewPassword(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="password"
              value={newPassword}
              fullWidth
              sx={{mb: 3}}
            />
            <TextField 
              label="Repeat new password"
              onChange={e => setNewPasswordAgain(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="password"
              value={newPasswordAgain}
              fullWidth
              sx={{mb: 3}}
            />
            <Button variant="outlined" color="secondary" type="submit">Reset password</Button>
        </Stack>
      </form>
    </React.Fragment>
  )
}

export default AuthResetPasswordPage
import * as React from 'react';
import {
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Grid,
    Box,
    Container,
    CssBaseline,
    Avatar,
    Typography,
    CircularProgress,
    SnackbarCloseReason,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/store';
const theme = createTheme();
import { errorAlert } from '@/slices/auth/authSlice';
import ErrorSnackbar from '@/components/alert/error-snackbar';
import { actionsAuth } from '../auth-actions';

const AuthLoginPage = () => {
    const dispatch = useAppDispatch();
    const { logging, errorSnackbar, message, typeAlert } = useAppSelector(state => state.auth);
    const { loginSubmit } = actionsAuth()

    const navigate = useNavigate();

    const handleCloseSnackbar = (event: React.SyntheticEvent | Event, reason: SnackbarCloseReason) => {
        dispatch(errorAlert(false));
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Box component="form"
                        onSubmit={(event) => loginSubmit(event as React.FormEvent<HTMLFormElement>, navigate)}
                        sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={logging}
                        >
                            {logging ? <CircularProgress size={24} /> : 'Login'}
                        </Button>
                        <ErrorSnackbar
                            open={errorSnackbar}
                            message={message}
                            handleCloseSnackbar={handleCloseSnackbar}
                            typeAlert={typeAlert}
                        />
                        <Grid container>
                            <Grid item xs>
                                <Link to="/auth/resetPassword">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/auth/register">
                                    Don't have an account? Register
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
};

export default AuthLoginPage;

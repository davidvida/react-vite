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
    Typography
} from '@mui/material';
import AccessibilityNewOutlined from '@mui/icons-material/AccessibilityNewOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
const theme = createTheme();
import { useDispatch, useSelector, Provider } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { postRegister } from "@/slices/auth/authSlice";
import { store } from "@/store/store";

export default function AuthRegisterPage() {
    // const dispatch = useDispatch<AppDispatch>();
    // const { addingItem } = useSelector((state: RootState) => state.auth);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        
    };

    return (
        <Provider store={store}>
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
                            <AccessibilityNewOutlined />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Register
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Register
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link to="/auth/login">
                                        {"Login"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </Provider>
    );
}
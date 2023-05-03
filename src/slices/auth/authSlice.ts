import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "@/api/auth-api";
import { RegisterProps, LoginProps, tokenProps } from "@/types/auth";
import { initialState } from "./auth-state";
import { useNavigate } from "react-router-dom";

export const postRegister = createAsyncThunk(
    'auth/registerProcess',
    async (params: RegisterProps, thunkApi) => {
        const response = await thunkApi.dispatch(authApi.endpoints.register.initiate(params));
        const responseData = response as { data: RegisterProps };
        return responseData;
    });

export const postLogin = createAsyncThunk(
    'auth/loginProcess',
    async (params: LoginProps, thunkApi) => {
        thunkApi.dispatch(authActions.logging(true));
        const response = await thunkApi.dispatch(authApi.endpoints.login.initiate(params));
        const responseData = response as { data: Partial<tokenProps> };
        console.log(responseData)
        // const navigate = useNavigate();
        const token = responseData.error.data
        const statusCode = responseData.error.originalStatus
        const errorMessage = responseData.error.data.message

        console.log(token)
        console.log(statusCode)
        console.log(errorMessage)
        if (statusCode === 201) {
            thunkApi.dispatch(authActions.setToken(token));
            thunkApi.dispatch(authActions.isLogged(true));
            // navigate('/todos');
        } else {
            thunkApi.dispatch(authActions.errorMessage('Login failed: ' + errorMessage));
            thunkApi.dispatch(authActions.errorSnackbar(true));
        }
        return responseData;
    });

export const errorAlert = createAsyncThunk(
    'auth/errorAlert',
    async (params: boolean, thunkApi) => {
        thunkApi.dispatch(authActions.errorSnackbar(params));
        return null;
    });

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logging: (state, action: PayloadAction<boolean>) => {
            state.logging = action.payload
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
        setUser: (state, action: PayloadAction<string>) => {
            state.user = action.payload
        },
        isLogged: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload
        },
        errorSnackbar: (state, action: PayloadAction<boolean>) => {
            state.errorSnackbar = action.payload
        },
        errorMessage: (state, action: PayloadAction<string>) => {
            state.errorMessage = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(postLogin.fulfilled, (state, action) => {
            state.logging = false;
        });
    }
});

// export reducer
export default authSlice.reducer;

// export actions
export const authActions = authSlice.actions

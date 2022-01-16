import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.origin = action.payload;
        },
        setUser: (state, action) => {
            state.origin = action.payload;
        },
    },
});

export const { setEmail, setUser } = authSlice.actions;

export const selectEmail = (state) => state.auth.email;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;

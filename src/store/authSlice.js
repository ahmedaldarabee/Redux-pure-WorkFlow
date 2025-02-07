import { createSlice } from '@reduxjs/toolkit'

const initState = {
    isLoggin: false
};

const authSlice = createSlice({
    name:"auth",
    initialState:initState,
    reducers:{
        loggIn : (state) => {
            state.isLoggin = true
        },
        loggOut :(state) => {
            state.isLoggin = false
        }
    }
})

export const {loggIn,loggOut} = authSlice.actions;
export default authSlice.reducer;
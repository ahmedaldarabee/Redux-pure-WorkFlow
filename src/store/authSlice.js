import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name:"auth",
    initialState: {
        isLoggin: true
    },
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
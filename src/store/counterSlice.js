import { createSlice } from '@reduxjs/toolkit'
import { loggOut } from './authSlice'

const initState = {
    value:0,
    showCounter:true
}

const counterSlice = createSlice({
    name:"counter",
    initialState: initState,
    reducers : {
        increase:(state , action)=>{
            state.value += action.payload
        },
        decrease:(state , action)=>{
            state.value -= action.payload
        },
        reset:(state)=>{
            state.value = 0
        }
    },
    extraReducers : (builder) => {
        //loggOut as a action that i needed to listen it!
        // callback function to handle this case that be as extra reducer action
        builder.addCase(loggOut,(state , action)=>{
            state.value = action.payload
        })
    }
});

export const { increase , decrease , reset } =  counterSlice.actions;
export default counterSlice.reducer;
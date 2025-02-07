import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name:"counter",
    initialState: {
        value:0,
        showCounter:true
    },
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
    }
});

export const { increase , decrease , reset } =  counterSlice.actions;
export default counterSlice.reducer;
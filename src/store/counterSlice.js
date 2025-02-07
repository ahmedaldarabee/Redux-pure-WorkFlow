import { createSlice } from '@reduxjs/toolkit'

let initState = {
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
        },
        toggleCounter:(state)=>{
            state.showCounter = !state.showCounter;
        }
    }
});

export default counterSlice.reducer;
export const { increase , decrease , reset , toggleCounter } =  counterSlice.actions;
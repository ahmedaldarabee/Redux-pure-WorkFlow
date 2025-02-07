import { createSlice , createStore} from '@reduxjs/toolkit'

// notes:
//state must be as object

/** that represent the initial status.
 * {
"type": "@@redux/INIT2.9.w.j.f.r"
}
    to see that :
    console.log(action);
*
*/

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
        reset:(state , action)=>{
            state.value = 0
        },
        toggleCounter:(state , action)=>{
            state.showCounter = !state.showCounter;
        }
    }
})


const store = createStore(counterSlice.reducer);
export const { increase , decrease , reset , toggleCounter } =  counterSlice.actions;
export default store;
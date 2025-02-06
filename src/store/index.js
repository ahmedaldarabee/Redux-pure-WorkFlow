import { createStore } from 'redux'

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

const counterReducer = (state = initState , action) => {
    if(action.type === 'increase'){
        return { ...state, value : (state.value + action.payload) }
    }else if(action.type === 'decrease'){ 
        return { ...state, value : (state.value - action.payload) }
    }else if(action.type === 'toggleCounter'){
        return { ...state, showCounter : !state.showCounter }
    }else if(action.type === 'reset'){
        return { ...state, value : (state.value = action.payload) }
    }else{
        return state;
    }
}

const store = createStore(counterReducer);

//now we needed the handle subscribe with needed component so
// subscribe that be as provider as a wrapper component into APP.js where App.js that act as needed component!

export default store;
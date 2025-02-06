let increaseBtn = document.querySelector(".increase");
let decreaseBtn = document.querySelector(".decrease");
let spanCounter = document.querySelector(".span-counter");

// state must be as an object
let initState = {
    counter: 0
}

let reducerCounter = (state = initState , action) => {
    // some logic to update and manipulation the state
    // first state that be as @@@redux !
  if(action.type === "increase"){
    return {
      // this way [ ...state ] to update main state without any conflicts like removing any another states      
      ...state,
      counter : state.counter + action.payload.factor
    }
  }else if(action.type === "decrease"){
    return {
      ...state,
      counter : state.counter - action.payload.factor
    }
  }else{
    return state;
  }
}

let store = Redux.createStore(reducerCounter);

//just it will show new updates!
let counterComponentApp = () => {
    spanCounter.innerText = store.getState().counter;
}
counterComponentApp()

store.subscribe(counterComponentApp)

increaseBtn.addEventListener("click",()=>{
    store.dispatch({ type:"increase",payload: {factor:5} });
})

decreaseBtn.addEventListener("click",()=>{
    store.dispatch({ type:"decrease",payload: {factor:1} });
})
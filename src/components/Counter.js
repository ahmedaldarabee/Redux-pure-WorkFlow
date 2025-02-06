import '../App.css';
import React, { Fragment, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  // as you see the component handling in it by using useSelector and useDispatcher

  {/* useDispatcher that send action into store */}
  {/* useSelector that represent receiving state from store */}

    const counterValueHandler = (value) => {
    return value <= 0 ? "Sorry, it must be up 0" : value;
    }

    const globalState = useSelector((state) => state);

    const dispatcher = useDispatch();

    const counterFunctionality = useCallback((type,payload) => {
    dispatcher({type,payload}); 
    },[dispatcher]);

  // now we can useEffect to handle onLoading section with handle dependency

    useEffect(() => {
        dispatcher({type:"increase",payload:5})
    },[counterFunctionality]);

    const toggleCounterHandler = () => {
        dispatcher({ type:"toggleCounter" });
    }

    return (
        <Fragment>
            <div className="parent-counter full-width flex-center flex-col gap-20 m-20">
                <div className="container pointer text-center">
                    { globalState.showCounter && 
                    <div>
                        <div className="text-section">
                            <p className="bold"> <span className='capitalize'>counter:</span> <span className="span-counter">{counterValueHandler(globalState.value)}</span> </p>
                        </div>
                        
                        <div className="m-20 button-handler flex-center gap-20">
                            <button onClick={()=>counterFunctionality("increase",10)}  type="button" className="capitalize pointer increase">increase</button>
                            <button onClick={()=>counterFunctionality("decrease",5)}   type="button" className="capitalize pointer decrease">decrease</button>
                            <button onClick={()=>counterFunctionality("reset",0)}      type="reset" className="capitalize pointer decrease">reset</button>
                        </div>
                    </div>
                }

                <div className="m-20 button-handler flex-center gap-20">
                    <button onClick={toggleCounterHandler} type="button" className="capitalize pointer">hidden / show counter component</button>
                </div>

                </div>
            </div>
        </Fragment>
    );
}

export default Counter;

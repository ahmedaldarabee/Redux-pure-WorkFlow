import '../App.css';
import React, { useEffect , useCallback}  from 'react'
import { useSelector, useDispatch } from '@reduxjs/toolkit';
import { increase , decrease , reset } from '../store/counterSlice'
import {loggIn,loggOut} from '../store/authSlice'

const Counter = () => {

    const globalState = useSelector((state) => state);
    const dispatcher = useDispatch();

    const isLogin = () => {
        return globalState.auth.isLoggin;
    }
    const loginHandler = () => {
        if (isLogin()) {
            dispatcher(loggOut());
        } else {
            dispatcher(loggIn());
        }
    };

    //The main target of using this case that's be for you to understand the main functionality of this hook!
    // -to see more about this note, see note folder - overall-notes.txt

    const counterHandler = useCallback((type , value) =>{
        if(type === 'increase'){
            dispatcher(increase(value))
        }else if(type === 'decrease'){
            dispatcher(decrease(value))
        }else{
            dispatcher(reset())
        }
    },[dispatcher]);

    useEffect(() => {
        counterHandler('increase',10)
    },[counterHandler]);

    return (
        <>
            <div className="parent-counter full-width flex-center flex-col gap-20 m-20">
                <div className="container pointer text-center">
                    { isLogin() && 
                    <div>
                        <div className="text-section">
                            <p className="bold"> <span className='capitalize'>counter:</span> <span className="span-counter">{globalState.counter.value}</span> </p>
                        </div>
                        
                        <div className="m-20 button-handler flex-center gap-20">
                            <button onClick={() => counterHandler('increase',10) }  type="button" className="capitalize pointer increase">increase</button>
                            <button onClick={() => counterHandler('decrease',5)  }  type="button" className="capitalize pointer decrease">decrease</button>
                            <button onClick={() => counterHandler('reset')}        type="reset" className="capitalize pointer decrease">reset</button>
                        </div>
                    </div>
                }

                <div className="m-20 button-handler flex-center gap-20">
                    <button onClick={loginHandler} type="button" className="capitalize pointer">
                        { isLogin() ? 'logout component' : 'login component' }
                    </button>
                </div>

                </div>
            </div>
        </>
    );
}

export default Counter;

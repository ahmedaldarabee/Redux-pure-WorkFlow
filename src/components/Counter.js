import '../App.css';
import React  from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increase , decrease , reset , toggleCounter } from '../store/counterSlice'
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
                            <button onClick={() => dispatcher(increase(10)) }  type="button" className="capitalize pointer increase">increase</button>
                            <button onClick={() => dispatcher(decrease(5))  }  type="button" className="capitalize pointer decrease">decrease</button>
                            <button onClick={() => dispatcher(reset())}        type="reset" className="capitalize pointer decrease">reset</button>
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

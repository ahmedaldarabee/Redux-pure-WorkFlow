import '../App.css';
import React, { Fragment, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increase , decrease , reset , toggleCounter } from '../store/index'

const Counter = () => {

    const globalState = useSelector((state) => state);
    const dispatcher = useDispatch();

    return (
        <Fragment>
            <div className="parent-counter full-width flex-center flex-col gap-20 m-20">
                <div className="container pointer text-center">
                    { globalState.showCounter && 
                    <div>
                        <div className="text-section">
                            <p className="bold"> <span className='capitalize'>counter:</span> <span className="span-counter">{globalState.value}</span> </p>
                        </div>
                        
                        <div className="m-20 button-handler flex-center gap-20">
                            <button onClick={() => dispatcher(increase(10)) } type="button" className="capitalize pointer increase">increase</button>
                            <button onClick={() => dispatcher(decrease(5))  }  type="button" className="capitalize pointer decrease">decrease</button>
                            <button onClick={() => dispatcher(reset())}       type="reset" className="capitalize pointer decrease">reset</button>
                        </div>
                    </div>
                }

                <div className="m-20 button-handler flex-center gap-20">
                    <button onClick={() => dispatcher(toggleCounter())} type="button" className="capitalize pointer">hidden / show counter component</button>
                </div>

                </div>
            </div>
        </Fragment>
    );
}

export default Counter;

import counterSlice from './counterSlice'
import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'

const store = configureStore({
        reducer: { 
            counter:counterSlice,
            auth:authSlice
        }
    }
);
export default store;
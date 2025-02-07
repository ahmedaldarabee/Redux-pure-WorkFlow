import counterSlice from './counterSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: { counter:counterSlice } });
export default store;
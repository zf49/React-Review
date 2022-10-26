import {configureStore} from '@reduxjs/toolkit'
import counterReduer from './../features/counter/counterSlice'
import testReducer from './../features/counter/test1Slice'

export const store = configureStore({
    reducer:{
        counterStore:counterReduer,
        mabi:testReducer,
    }
})

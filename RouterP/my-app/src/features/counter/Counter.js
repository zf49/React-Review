import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

import {increment, decrement,reset} from './counterSlice'
import Test from './test'

export const Counter = () => {

    const count = useSelector((state) =>{   console.log(state)
        return state.counterStore.count})

    const dispatch = useDispatch();


    return (
        <section>
            <Test></Test>
            <br></br>
            <hr></hr>
            <p>{count}</p>
            <div><button onClick={()=>{
               dispatch(increment())
            }}>+</button></div>
            <div><button onClick={()=>{
               dispatch(decrement())
            }}>-</button></div>
            
            <div><button onClick={()=>{
               dispatch(reset())
            }}>reset</button></div>

        </section>
    )
}

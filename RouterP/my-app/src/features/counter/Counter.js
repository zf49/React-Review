import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'

import {increment, decrement,reset,incremntByAmount} from './counterSlice'
import Test from './test'




export const Counter = () => {

    const count = useSelector((state) =>{   console.log(state)
        return state.counterStore.count})

    const dispatch = useDispatch();

    const [incremnetAmount, setIncremnetAmount] = useState(0)
    
    
    const addValue = Number(incremnetAmount) || 0
    
        const restAll = ()=>{
            setIncremnetAmount(0)
            dispatch(reset())
        }

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


<br></br>
            <hr></hr>

            <input type="text" value={incremnetAmount} onChange={(e)=>{
                setIncremnetAmount(e.target.value)
            }}></input>


            
            <div>
                <button onClick={()=>{
                   return dispatch(incremntByAmount(addValue))
                }}>asd</button>
                <button onClick={()=>{
                   return restAll()
                }}>reset</button>


            </div>


        </section>
    )
}

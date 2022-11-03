import React from 'react'

import {useSelector,useDispatch} from 'react-redux'
import { changeName } from './test1Slice';





export default function Test() {

const num = useSelector((state) => { return state.mabi.testIS})

const dispatch = useDispatch();

    return (
        <div>
            test-{num}
            <button onClick={()=>{
                return dispatch(changeName())
            }}>test</button>
        </div>
    )
}

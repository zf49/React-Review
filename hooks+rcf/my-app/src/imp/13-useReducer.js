import React, { useReducer } from 'react'
//处理函数
const reducer = (preState,action)=>{
console.log("reducer 执行",preState,action)

    let newState = {...preState}
    switch(action.type){
        case "chris-minus":
            newState.count--
            return newState
        case "chris-add":
            newState.count++
            return newState
        default:
            return preState
    }


}
// 外部对象
const initialState = {
    count : 0
}


export default function App() {

    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <div>
            counter+ 

                {/* changeBottomTab */}

<hr></hr><br></br>
        <button onClick={()=>{
            dispatch({
                type: "chris-minus"
            })
        }}>-</button>
        {state.count}
        <button onClick={()=>{
            dispatch({
                type: "chris-add"
            })
        }}>+</button>
        </div>
    )

}

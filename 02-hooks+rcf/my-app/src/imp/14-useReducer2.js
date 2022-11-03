import React, { useContext, useReducer } from 'react'


const initialState = {
    a:"11111",
    b:"11111"
}


const reducer = (preState, action)=>{

    let newState = {...preState}


    switch (action.type){ 
        case "Change-A":
            newState.a = action.value
            return newState
        case "Change-B":
            newState.b = action.value
            return newState
        default:
            return preState
    }
}




const GlobalContext = React.createContext()



export default function App() {


    const [state, dispatch] = useReducer(reducer, initialState)


    return (

        <GlobalContext.Provider value={
            {state,
            dispatch
            }
        }>

        <div>
            <Child1></Child1>
            <Child2></Child2>
            <Child3></Child3>
        </div>
        </GlobalContext.Provider>

        
    )
}



function Child1 (){

    const {dispatch} = useContext(GlobalContext)


    return(<div style={{
        background:'red'
    }}>
        <button onClick={
           ()=>{ dispatch({
                type:"Change-A",
                value:"222222222"
            })
         } }>Change A</button>
        <button onClick={
           ()=>{ dispatch({
                type:"Change-B",
                value:"333333333"
            })
         } }>Change B</button>
    </div>)
}


function Child2 (){

    const {state} = useContext(GlobalContext)

    return(<div style={{
        background:'yellow'
    }}>
        Child2-{state.a}
    </div>)
}


function Child3 (){

    const {state} = useContext(GlobalContext)

    return(<div style={{
        background:'gray'
    }}>
        Child3-{state.b}
        </div>)
}
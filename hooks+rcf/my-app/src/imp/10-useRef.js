import React, { useRef, useState } from 'react'

export default function App() {

    const [todoList, settodoList] = useState(["吃饭","睡觉"])

    const [todo, settodo] = useState("")
   

    const mytext = useRef()

    return (
        <div>
            <input ref={mytext} onChange={(evt)=>{
                settodo(evt.target.value)
                
            }}></input>
            <button onClick={()=>{
                console.log(mytext.current.value)

                settodoList([...todoList,mytext.current.value])

                mytext.current.value = ""
            }}>Add</button>

            <ul>
                {todoList.map((item,index)=>{
                    return <li key={index}>{item}<button onClick={()=>{

                        let newList = [...todoList]
                        console.log(newList)

                        newList.splice(index,1)

                        settodoList(newList)

                    }}>delete</button></li>
                })}
            </ul>

                {!todoList.length&&<div>暂无待办事项</div>}

        </div>
    )
}

import { addListener } from 'process'
import React, { useState } from 'react'

export default function App() {

    const [content, setContent] = useState("")

    const [list, setList] = useState<any>([])


    function addList(){

        setList([...list,content])
        console.log(list)
    }

    function deleteNode(idex:number){
        let newList = [...list]
        newList.splice(idex,1)

        setList(newList)

    }




    return (

        <div>
            <h1>todo</h1>
            <hr></hr>
            <br></br>

            <input type='text' onChange={(evt)=>{

                setContent(evt.target.value)
                
            }}/>
            <button onClick={()=>{
                addList()
            }}>Add</button>


            <ul>
                {list.map((item:any,index:number)=>{
                    return <li key={index}>{item}<button onClick={()=>{
                        deleteNode(index)
                    }}>Delete</button></li>

                })}
            </ul>



        </div>



    )
}
function addList() {
    throw new Error('Function not implemented.')
}


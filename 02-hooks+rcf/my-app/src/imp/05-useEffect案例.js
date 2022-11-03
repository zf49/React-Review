import React, { useEffect, useState } from 'react'

export default function App() {

    const [isCreated, setisCreated] = useState(true)


    return (
        <div>
            <button onClick={()=>{

                setisCreated(!isCreated)

            }}>click</button>
            {isCreated&&<Child></Child>}
        </div>
    )

}


function Child(){

    useEffect(() => {
        
        window.onresize = ()=>{
            console.log("resize")
        }

       let timer =  setInterval(()=>{
            console.log("111")
        },1000)

        return ()=>{
            console.log("组件销毁")
            window.onresize = null
            clearInterval(timer)
        }

    }, [])




    return(
        <div>
            child
        </div>
    )

}
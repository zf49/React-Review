import React, { useState } from 'react'




export default function App() {
    
    const [name,setName] = useState("Chris");


    const [age, setage] = useState(26)



    return (
        <div>
            <button onClick={()=>{
                // console.log(name)
                setName("王治方")
                setage(30)
            }}>Click</button>
            {name}-{age}
        </div>
    )
}

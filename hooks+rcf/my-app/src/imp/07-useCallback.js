import React, { useState } from 'react'

export default function App() {

    const [count, setcount] = useState(0)

    

    return (
        <div>
            counter-{count} 

            <button onClick={()=>{
                setcount(count+1)
            }}>
                +1
            </button>
            <button onClick={()=>{
                setcount(0)
            }}>reset</button>

        </div>
    )
}

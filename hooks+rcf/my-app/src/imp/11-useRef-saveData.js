import React, { useRef, useState } from 'react'

export default function App() {

    const [count, setcount] = useState(0)
    
    let mycount = useRef(0)   

    return (
        <div>
            counter-{count} -{mycount.current}

            <button onClick={()=>{
                setcount(count+1);
                mycount.current++
            }}>
                +1
            </button>
            <button onClick={()=>{
                setcount(0)
            }}>reset</button>

        </div>
    )
}

import React, { useEffect } from 'react'
import { useState } from "react";


export default function App() {


    const [name, setName] = useState("chris")

    useEffect(() => {
        setName(name.substring(0,1).toUpperCase()+name.substring(1))
    }, [name])


    return (
        <div>
            04-{name}


            <button onClick={
                ()=>{
                    setName("wangzhifang")
                }
            }>Change Name</button>


        </div>
    )
}

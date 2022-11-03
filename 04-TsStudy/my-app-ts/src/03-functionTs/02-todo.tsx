import React, { useRef,useState } from 'react'

export default function App() {

    const myText = useRef<HTMLInputElement>(null)

    const [list, setList] = useState<string[]>([])

    return (
        <div>
            <input ref={myText}></input>
            <button onClick={()=>{
                console.log((myText.current as HTMLInputElement).value)

               setList([...list,(myText.current as HTMLInputElement).value])

            }}>click</button>


            {list.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}






        </div>
    )
}

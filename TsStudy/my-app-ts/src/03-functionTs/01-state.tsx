import React,{useState} from 'react'




export default function App() {

    const [name, setName] = useState<string>("chris")

    return (
        <div>
            03-函数式
            <hr></hr>
            {name.substring(0,1).toUpperCase() + name.substring(1)}
            <button onClick={()=>{
                setName("wangzhifang")
            }}>click</button>
        </div>
    )
}

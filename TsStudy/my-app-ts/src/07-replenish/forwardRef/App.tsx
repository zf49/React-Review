import React, { InputHTMLAttributes, RefObject, useEffect, useRef } from 'react'

export default function App(props:any) {

    let mytext:any = null




    return (
        <div>

            <button onClick={()=>{
                console.log(mytext)
                mytext.current.focus()
                mytext.current.value=''
                
            }}>get focus</button>

            <Child callback={(el:any)=>{
                // console.log(el)
                mytext = el
            }}/>



        </div>
    )
}


function Child(props:any){

    
    const myRef:any = useRef(null)

    useEffect(() => {
        // console.log(myRef.current.value)
        props.callback(myRef)
    }, [])




    return(
    <div style={{
        background:'yellow'
    }}>
        children
        <input defaultValue="1111111" ref={myRef} />
    </div>
    )
}
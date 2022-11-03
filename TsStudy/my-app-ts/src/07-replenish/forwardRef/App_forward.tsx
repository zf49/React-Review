import React, { forwardRef, InputHTMLAttributes, RefObject, useEffect, useRef } from 'react'

export default function App(props:any) {


    let myext:any = useRef()


    return (
        <div>

            <button onClick={()=>{
               console.log(myext)
               myext.current.focus()

                myext.current.value=""

            }}>get focus</button>

            <Child ref={myext}/>



        </div>
    )
}


const Child = forwardRef((props,ref:any)=>{
    return(<div style={{
        background:'red'
    }}>
        <input defaultValue="2222222222"  ref={ref}/>

    </div>)
})
import React from 'react'

import aaa from './1123123.png'


export default function App() {


   let myUserName = React.createRef();  


    return (
        <div>
            <h1>登陆页面</h1>

            <input type="text" ref={myUserName} defaultValue="123"></input>
            <button onClick={
                ()=>{
                    console.log(myUserName.current.value)
                }
            }>登陆</button>

            <button onClick={
                ()=>{
                    myUserName.current.value=""
                }
            }>重制</button>


            <ul>
                <img src={aaa}></img>
            </ul>
        </div>
    )
}

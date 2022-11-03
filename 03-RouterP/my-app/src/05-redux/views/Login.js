import React from 'react'

export default function Login(props) {
    return (
        <div>
            <h1>登陆页面</h1>
            <input type="text"></input>
            <input type="password"></input>
            <input type="submit" onClick={()=>{
                localStorage.setItem("token","123")
                props.history.push('/center')
            }}></input>
        </div>
    )
}

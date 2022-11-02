import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [login, setlogin] = useState({
        name:'',
        pwd:''
    })



    const navigate = useNavigate()

    function toHome (){
      
        navigate(`/`)

    }
    return (

       

        <div>
            
            username:<input type='text' onChange={(evt:any)=>{
                setlogin({
                    name:evt.target.value,
                    pwd:login.pwd

                })
            }}/><br></br>
            <br></br>
            password: <input type="password" onChange={(evt:any)=>{
                setlogin({
                    name:login.name,
                    pwd:evt.target.value

                })
            }}/> 


            <br></br>
            <button onClick={()=>{
                console.log(login)

                localStorage.setItem("token",JSON.stringify(login)) 
               

               toHome()


            }}
                            
                >提交</button>


            

        </div>
    )
}

import React from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'



export default function App() {

    function handleClick (){
        console.log("111")
    }


    return (
        <div>
            01 antd


            <Button type="primary" onClick={()=>{
                handleClick()
            }}>Primary Button</Button>

        </div>
    )
}

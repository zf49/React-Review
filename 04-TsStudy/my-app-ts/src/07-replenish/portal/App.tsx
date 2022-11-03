import React, { useState } from 'react'

import '../portal/css/App.css'
import Dialog from './component/Dialog'
import PortalDialog from './component/PortalDialog'


export default function App() {



    const [isShow, setisShow] = useState(false)




    return (
        <div className='box'>
            <div className="left"></div>

            <div className="right">
            <button onClick={()=>{
               setisShow(!isShow)
            }}>ajax</button>

            {isShow&&<PortalDialog onClose={()=>{
                console.log('11111111')
                setisShow(!isShow)
            }}>
                <li>1111111</li>
                <li>2222222</li>
                <li>3333333</li>
                
                </PortalDialog>}


            </div>
        </div>
    )
}




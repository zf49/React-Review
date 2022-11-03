import React from 'react'
import { createPortal } from 'react-dom'

export default function PortalDialog(props:any) {


    return (
        createPortal(<div style={{
            width:'100%',
            height:'100%',
            position:'fixed',
            left:0,
            top:0,
            background:'rgba(0,0,0,0.7)',
            color:'white'
        }}>
            {/* {props.children} */}
               <div>Loading</div>
               <button onClick={()=>{
                   props.onClose()
               }}>Close</button>
        </div>,document.body)
    )
}

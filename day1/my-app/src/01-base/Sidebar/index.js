import React from 'react'

import './../css/sidebarCss.css'
export default function Sidebar(props) {

    let {bg,position} = props

    console.log(position)


    var obj2 = {
        right:0
    }


    var obj1={
        left:0

    }


    var obj={
        background:bg,
        width:"200px",
        position:"fixed"
    }


    var styleobj = position === "left"?{...obj,...obj1} : {...obj,...obj2}


    return (

        

        <div className="testside" style={styleobj}>
            <ul>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            </ul>
        </div>
    )
}



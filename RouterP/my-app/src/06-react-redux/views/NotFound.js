import React,{useEffect} from 'react'



import {connect} from 'react-redux'



function NotFound(props) {

    useEffect(()=>{
        console.log(props)
    },[props])


    return (
        <div>
            404 not found
        </div>
    )
}

function chrisConnect(cb){
    var value = cb()
    return (MyComponent)=>{
        return ()=>{
        return <div style={{
            color:"red"
        }}>
            <MyComponent {...value}/>
        </div>
    }
    }
}

export default chrisConnect(()=>{
    return {
        a:1,
        b:2
    }
})(NotFound)
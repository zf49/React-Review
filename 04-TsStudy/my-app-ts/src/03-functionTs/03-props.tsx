import React from 'react'

export default function App() {
    return (
        <div>
            03-app
            <hr></hr>
            <Child name={"111"}></Child>
        </div>
    )
}


interface IProps{
    name:string
}



function Child(props:IProps){

    return (<div>
                child-{props.name}
        </div>)
}

import React, { useState } from 'react'
import {List} from 'immutable'


let arr = List([1,2,3,4])

export default function App() {


    let fav = ["aaa","bbb","ccc"]

    const [favor, setfavor] = useState(List(fav))

    return (
        <div>
            {favor.map((item)=>{
                console.log(item)
                
            })}
        </div>
    )
}

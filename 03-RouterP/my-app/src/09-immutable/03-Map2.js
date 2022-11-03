import React, { useMemo, useState } from 'react'

import {Map} from 'immutable'


export default function App() {

    let obj = Map({
        name:'chris',
        age: 26,
        select:"aa",
        filter:Map({
            text:"",
            up:'true',
            down:false
        }),
        tree:Map({
            a:Map({
                a:1
            }),
            b:Map({
                b:2
            }),
            c:Map({
                a:Map({
                    c:"复杂结构"
                })
            })
        })
    })


    const [info] = useState(obj)

    return (
        <div>
            {info.get('tree').get('c').get('a').get('c')}
            <Child complicated={info.get('tree')}></Child>
        </div>
    )
}

 function Child(props) {

    useMemo(() => {
        if(props  === props){

        }
    }, [])


    return (
        <div>
            child-{props.complicated.get('a').get('a')}
        </div>
    )
}


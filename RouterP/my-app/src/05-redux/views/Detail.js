import React, { useEffect } from 'react'
import { hide, show } from '../redux/actionCreator/TabbarActionCreator'
import store from './../redux/store'

export default function Detail(props) {
    console.log(props.match.params.chrisId,"利用Id拿后端数据 ------动态路由")

    // console.log(props)

    
    useEffect(() => {
        store.dispatch(hide())
        return ()=>{
            store.dispatch(show())
        }
    }, [])    



    return (
        <div>
           ID: {props.match.params.chrisId}
        </div>
    )
}

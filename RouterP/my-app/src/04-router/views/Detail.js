import React from 'react'


export default function Detail(props) {
    console.log(props.match.params.chrisId,"利用Id拿后端数据 ------动态路由")

    console.log(props)

    return (
        <div>
            
           ID: {props.match.params.chrisId}
        </div>
    )
}

import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Film() {
    return (
        <div>
            Film
            <hr></hr>
            <div style={{
                height:'200px',
                background:'yellow'
            }}>
                大轮播
            </div>
            <hr></hr> 
            {/* {路由容器} */}
            <Outlet></Outlet>

        </div>
    )
}

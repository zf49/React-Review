import React from 'react'
import { Routes,Navigate } from 'react-router-dom'

import {HashRouter, Route} from 'react-router-dom' 
// import Center from '../view/Center'
// import Cinema from '../view/Cinema'
// import ComingSoon from '../view/film/ComingSoon'
// import Detail from '../view/Detail'
// import Film from '../view/Film'
// import Login from '../view/Login'
// import NotFound from '../view/NotFound'
// import NowPlaying from '../view/film/NowPlaying'
// import Search from '../view/Search'




export default function MRouter() {



    return (
        <div></div>
              
    )
}


interface IProps{
    children:React.ReactNode;
}



// 路由拦截组件的封装
function AuthComponent(props:IProps){

    const isLogin = localStorage.getItem('token')

    return <>
        {isLogin?props.children:<Navigate to='/login'></Navigate>}
    </>


}

// 路由懒加载
const lazyload = (path:any)=>{
    const Comp = React.lazy(()=>{
       return import(`./../view/${path}`)
    })
    return (
        <React.Suspense fallback={<>加载中
        </>}>
            <Comp/>
        </React.Suspense>
    )

}



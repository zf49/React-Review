import React from 'react'
import { useRoutes } from 'react-router-dom'
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

    const element = useRoutes([
        {
            path:"/films",
            element:lazyload("Film"),
            children:[
                {
                    path:"nowplaying",  
                    element:lazyload("film/NowPlaying")
                },
                {
                    path:'',
                    element:<Navigate to="/films/nowplaying"></Navigate>
                },
                {
                    path:'comingsoon',
                    element:lazyload("film/ComingSoon")
                }
            ]
        },
        {
            path:"/cinemas",
            element:lazyload("Cinema")
        },
        {
            path:'/login',
            element:lazyload('Login')
        },
        {
            path:"/center",
            element:<AuthComponent>
                        {lazyload("Center")}
                    </AuthComponent>
        },
        {
            path:"/detail/:id",
            element:lazyload("Detail")
        },
        {
            path:"/search",
            element:lazyload("Search")
        }
        
    ])

    return (
        <>
        {element}
        </>
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



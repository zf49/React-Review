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


    function isAuth(){



        return localStorage.getItem('token')
    }



    return (
        <Routes>
              
               


            <Route path="/films" element={lazyload("Film")}>
                // index 如果没有匹配到则走含有index的路径
                {/* <Route index element={<NowPlaying/>}></Route> */}
                // 或使用path="" 或 index对应父路径,同时使用Navigatec重定向去新路径
                <Route index element={<Navigate to='/films/nowplaying'/>}></Route>


                <Route path="/films/nowplaying" element={lazyload("film/NowPlaying")} />




{/* 
                <Route path="/films/nowplaying" element={<NowPlaying />} /> */}
                // 可写相对路径

                <Route path="comingsoon" element={lazyload("film/ComimgSoon")} />
            </Route>


            <Route path='/login' element={lazyload("Login")}></Route>





               <Route path='/cinemas' element={lazyload("Cinema")}></Route>
              
              // 路由拦截，写成3目运算，执行验证方法后判断是否应该跳转

               <Route path='/center' element={<AuthComponent>
                   {lazyload("Center")}
               </AuthComponent>}></Route>




               <Route path='/center/search' element={lazyload("Search")}></Route>


                // 动态路由
               <Route path='/detail/:id' element={lazyload("Detail")}></Route>

               <Route path='/' element={<Navigate to='/films'/>}></Route>



               <Route path='*' element={lazyload("NotFound")}></Route>




            </Routes>
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



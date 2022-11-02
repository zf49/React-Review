import React from 'react'
import { Routes,Navigate } from 'react-router-dom'

import {HashRouter, Route} from 'react-router-dom' 
import Center from '../view/Center'
import Cinema from '../view/Cinema'
import ComingSoon from '../view/ComingSoon'
import Detail from '../view/Detail'
import Film from '../view/Film'
import NotFound from '../view/NotFound'
import NowPlaying from '../view/NowPlaying'
import Search from '../view/Search'




export default function MRouter() {
    return (
        <Routes>
              
               


            <Route path="/films" element={<Film />}>
                // index 如果没有匹配到则走含有index的路径
                {/* <Route index element={<NowPlaying/>}></Route> */}
                // 或使用path="" 或 index对应父路径,同时使用Navigatec重定向去新路径
                <Route index element={<Navigate to='/films/nowplaying'/>}></Route>


                <Route path="/films/nowplaying" element={<NowPlaying />} />
                // 可写相对路径

                <Route path="comingsoon" element={<ComingSoon />} />
            </Route>




               <Route path='/cinemas' element={<Cinema/>}></Route>
              
               <Route path='/center' element={<Center/>}></Route>

               <Route path='/center/search' element={<Search/>}></Route>



               <Route path='/detail' element={<Detail/>}></Route>

               <Route path='/' element={<Navigate to='/films'/>}></Route>



               <Route path='*' element={<NotFound/>}></Route>




            </Routes>
    )
}

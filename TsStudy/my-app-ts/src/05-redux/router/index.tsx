import React from 'react'
import {Route,BrowserRouter,Routes,Navigate} from'react-router-dom'
import Center from '../view/Center'
import Cinema from '../view/Cinema'
import Details from '../view/Details'
import Film from '../view/Film'


export default function IndexRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/film' element={<Film />} >
                    
                </Route>

                <Route path='/cinema' element={<Cinema/>}/>

                <Route path='/center' element={<Center/>}/>

                <Route path='/detail/:chrisId' element={<Details/>}/>


                <Route path='/' element={<Navigate to='/film'></Navigate>}></Route>

                <Route path='*' element={<Navigate to='/film'></Navigate>}></Route>
            </Routes>
        </BrowserRouter>
            
    )
}

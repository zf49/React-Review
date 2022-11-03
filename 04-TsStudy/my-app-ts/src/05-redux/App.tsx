import React, { useEffect, useState } from 'react'

import IndexRouter from './router'
import Film from './view/Film';

import store from './redux/store'


import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

export default function App() {

    const [show, setshow] = useState(store.getState().isShow)



    useEffect(() => {
        
        store.subscribe(()=>{
            console.log(store.getState())
            setshow(store.getState().isShow)
        
        })

    }, [])



    return (
        
        <div>
            05
            <IndexRouter/>
        <hr></hr>

           {show&& <ul>
                <li>film</li>
                <li>cinema</li>
                <li>center</li>
                
            </ul>}


        </div>

                
             
                    
                
          
       
    )
}

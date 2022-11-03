import React from 'react'

import IndexRouter from './router'
import Film from './view/Film';

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

export default function App() {
    return (
        
        <div>
            
            <IndexRouter/>
        <hr></hr>

            <ul>
                <li>film</li>
                <li>cinema</li>
                <li>center</li>
                
            </ul>


        </div>

                
             
                    
                
          
       
    )
}

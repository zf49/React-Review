import React from 'react'
import './tabbar.css'

import {Button,Layout} from 'antd'
import { Link,NavLink } from 'react-router-dom'


export default function TabBar() {



    return (
        <div>
             

                {/* <Button type="primary">Films</Button>
                <Button type="primary">Cinemas</Button>
                <Button type="primary">Center</Button> */}
              
                <footer>
                    <ul>
                        <li>
                            <NavLink to='/films' className={
                                ({isActive})=>
                                isActive? 'chris' :''  
                                
                            }>Films</NavLink>
                            <NavLink to='/cinemas' className={
                                ({isActive})=> isActive? 'chris' :''  
                                
                            }>Cinemas</NavLink>
                            <NavLink to='/center' className={
                                ({isActive})=>
                               isActive? 'chris' :''  
                                
                            }>Center</NavLink>
                        </li>
                    </ul>
                </footer>




          
        </div>
    )
}

import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './Tabbar.module.css'

export default function Tabbar() {
    return (
        <div className={style.tabbar}>
            <ul>
                <li>
                <NavLink to='/films' activeClassName='chrisactive'>Films</NavLink>
                
                </li>

                <li>
                <NavLink to='/cinemas'activeClassName='chrisactive'>Cinemas</NavLink>
                    </li>
                <li>
                <NavLink to='/center'activeClassName='chrisactive'>Users</NavLink>
                    </li>
            </ul>
        </div>
    )
}

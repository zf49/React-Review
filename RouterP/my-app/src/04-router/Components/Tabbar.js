import React from 'react'
import { NavLink } from 'react-router-dom'

import './Tabbar.css'


export default function Tabbar() {
    return (
        <div>
            <ul>
                <li>
                <NavLink to='/films' activeClassName='chrisactive'>Films</NavLink>
                Films
                </li>

                <li>
                <NavLink to='/cinemas'activeClassName='chrisactive'>Cinemas</NavLink>
                    Cinemas</li>
                <li>
                <NavLink to='/center'activeClassName='chrisactive'>Users</NavLink>
                    User</li>
            </ul>
        </div>
    )
}

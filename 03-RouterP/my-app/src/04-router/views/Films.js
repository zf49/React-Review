import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

import NowPlaying from './films/NowPlaying'
import Comingsoon from './films/Comingsoon'
import { NavLink } from 'react-router-dom'

import style from './css/Film.module.css'

export default function Films() {
    return (
        <div>
            <div style={{
                height:"200px",
                background:"yellow"
            }}>carousel</div>

            <ul>
                <li><NavLink to='/films/nowplaying' activeClassName={style.chrisactive}>正在热映</NavLink></li>
                <li><NavLink to='/films/comingsoon' activeClassName={style.chrisactive}>即将上映</NavLink></li>
            </ul>
            
            {/* Router config */}
            
            <Switch>
                <Route path='/films/nowplaying' component={NowPlaying}></Route>

                <Route path='/films/comingsoon' component={Comingsoon}></Route>

                <Redirect from='/films' to='/films/nowplaying'></Redirect>
            </Switch>


        </div>
    )
}

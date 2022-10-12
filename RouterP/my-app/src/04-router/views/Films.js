import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

import NowPlaying from './films/NowPlaying'
import Comingsoon from './films/Comingsoon'

export default function Films() {
    return (
        <div>
            <div style={{
                height:"200px",
                background:"yellow",
            }}>carousel</div>


            <div>Tabbar</div>

            
            {/* Router config */}
            
            <Switch>
                <Route path='/films/nowplaying' component={NowPlaying}></Route>

                <Route path='/films/comingsoon' component={Comingsoon}></Route>

                <Redirect from='/films' to='/films/nowplaying'></Redirect>
            </Switch>


        </div>
    )
}

import React from 'react'
import {BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFund from './../views/NotFound'
import Detail from '../views/Detail'
import Login from './../views/Login'

function isAuth (){
    return localStorage.getItem("token")
}





export default function indexRouter(props) {
    return (
        <div>
            <Router>
                {props.children}
                <Switch>
                    <Route path='/films' component={Films}></Route>
                    
                    {/* 动态路由 */}
                    <Route path='/detail/:chrisId' component={Detail}></Route>
                    
                    {/* 如果使用history.push()跳转  使用静态路由*/ }
                    {/* <Route path='/detail' component={Detail}></Route> */}

                    {/* <Route path="/films/nowplaying" component={NowPlaying}></Route> */}


                    <Route path="/center" render={(props)=>{
                        // console.log(props)
                      return  isAuth()?<Center {...props}></Center> :<Redirect to="/login"></Redirect>
                    }}></Route>


                    <Route path='/login' component={Login}></Route>

                    <Route path='/cinemas' component={Cinemas}></Route>
                    <Route path='/center' component={Center}></Route>
                    <Redirect from="/" to="/films" exact></Redirect>
                    <Route component={NotFund}></Route>
                </Switch>

            </Router>
        </div>
    )
}



import React, { Component } from 'react'


const Child = ()=><div>child</div>


class Navbar extends Component{
    render(){
        return(
        <div>navbar
            <Child></Child>
        </div>)
    }
}


const Swiper = ()=><div>Swiper</div>


function Tabbar (){
    return(
    <div>Tabbar</div>
    )
}

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        )
    }
}

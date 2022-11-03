import React, { Component } from 'react'
import Navbar from './navbar'
import Sidebar from './Sidebar'

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar title="导航"/>

                <Sidebar bg="red" position="left"/>
            </div>
        )
    }
}

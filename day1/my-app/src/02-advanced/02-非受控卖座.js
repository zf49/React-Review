import React, { Component } from 'react'

import './../01-base/css/02.css'

import Film from './component/Film.js'
import Cinema from './component/Cinema.js'
import Mine from './component/Mine.js'
import TopBar from './component/TopBat'
import TabBar from './component/TabBar'


export default class App extends Component {
    
    state = {
        current:0
    } 
    
    
    changeBottomTab = (index)=>{
        let currentNum = index;


        console.log(currentNum)

        this.setState({
            current:currentNum
        })


    }
    
    
    render() {
        return (
            <div>

                <TopBar center={
                    ()=>{
                        console.log("父组件topbar"+"告诉tabbar切换");

                        this.setState({
                            current:2
                        })
                    }
                }></TopBar>


                {this.state.current===0&&<Film></Film>}
                {this.state.current===1&&<Cinema></Cinema>}
                {this.state.current===2&&<Mine></Mine>}

                <TabBar event={
                    (currentNum)=>{
                     console.log("父组件定义"+currentNum);
                     this.setState({
                         current:currentNum
                     })
                    }
                } defaultValue={this.state.current}></TabBar>
            </div>
        )
    }
}

import React, { Component } from 'react'

import './../01-base/css/02.css'

import Film from './component2/Film.js'
import Cinema from './component2/Cinema.js'
import Mine from './component2/Mine.js'
import TopBar from './component2/TopBat'
import TabBar from './component2/TabBar'


export default class App extends Component {
    
    state = {
        list:[
            {
                id:1,
                text:"Films"
            },
            {
                id:2,
                text:"Cinemas"
            },
            {
                id:3,
                text:"Mine"
            }
        ],
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
                } back={
                    ()=>{
                        this.setState({
                            current:0
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
                } current={this.state.current} list={this.state.list}></TabBar>
            </div>
        )
    }
}








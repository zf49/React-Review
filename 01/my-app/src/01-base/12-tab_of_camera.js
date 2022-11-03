import React, { Component } from 'react'

import './css/02.css'

import Film from './component/Film.js'
import Cinema from './component/Cinema.js'
import Mine from './component/Mine.js'


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
                {this.state.current===0&&<Film></Film>}
                {this.state.current===1&&<Cinema></Cinema>}
                {this.state.current===2&&<Mine></Mine>}

                <ul>
                {this.state.list.map((item,index) =>{
                    return <li key={item.id} className={this.state.current===index?"active":""} onClick={()=>{
                        this.changeBottomTab(index);
                    }}>{item.text}</li>
                })}
                </ul>
            </div>
        )
    }
}

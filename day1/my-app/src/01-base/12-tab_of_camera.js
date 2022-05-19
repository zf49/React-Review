import React, { Component } from 'react'
import './css/02.css'

import Film from './component/Film'
import Center from './component/Center'
import Cinema from './component/Cinema'

export default class App extends Component {

    state={
        list:[
        {
                id:1,
                text:"film"
        }, 
        {
            id:2,
            text:"cinema"
        },
        {
        id:3,
        text:"center"
        }
    ],
    current:-1
    }


    click(index){
    

        var c =index;


        this.setState({
            current : c
        })

    }

    which(){

        switch(this.state.current){
            case 0:
                return <Film></Film>
            case 1:
                return<Cinema></Cinema>
            case 2:
                return<Center></Center>
            default:
                return null
        }

    }


    render() {
        return (
            <div>

            {/* {this.state.current ===0 && <Film></Film>}
            {this.state.current ===1 && <Cinema></Cinema>}
            {this.state.current ===2 && <Center></Center>} */}

            {
                this.which()
            }






                <ul>{this.state.list.map((item,index)=><li className={this.state.current===index?'active':''} key={item.id}
                onClick={
                    ()=>{
                       this.click(index) }       
                }
                
                
                >{item.text}</li>)}
                </ul> 
            </div>
        )
    }
}

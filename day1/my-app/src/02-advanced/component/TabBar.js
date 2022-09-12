import React, { Component } from 'react'

export default class TabBar extends Component {

    state={
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

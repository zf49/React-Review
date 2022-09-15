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
        current:this.props.defaultValue
    }

    changeBottomTab = (index)=>{
        let currentNum = index;


        console.log("子组件"+currentNum)

        this.setState({
            current:currentNum
        })
        this.props.event(currentNum)

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

import React, { Component } from 'react'

import BetterScroll from 'better-scroll'


export default class App extends Component {


    state = {
        list:[]
    }


    click = ()=>{
        var list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


        this.setState({
            list:list
        },()=>{
        console.log(this.state.list)
        console.log(document.querySelectorAll('li'))
            new BetterScroll('.wrapper')
        })
        // console.log(this.state.list)
        // console.log(document.querySelectorAll('li'))
        // new BetterScroll('.wrapper')


    }

    render() {
        return (
            <div>

                <button onClick={this.click}>点击</button>

                <div className="wrapper" style={{height:'200px',background:'yellow',overflow:'hidden'}}>
                   
                    <ul className="content">

                        {this.state.list.map(item=><li key={item}>{item}</li>)}

                    </ul>
                   
                </div>
            </div>
        )
    }
}

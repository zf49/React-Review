import React, { Component } from 'react'




export default class App extends Component {


    state = {
        list:["111","222","333"]
    }


    mapArrary(){
        let li = this.state.list.map((item,num)=>{return <li key={num}>{item+"---"+num}</li>})
        return li
    }



    render() {
        return (
            <div>
                <input type="text"></input>
                <button>show</button>

                <div>
                    <ul>{

                        // this.state.list.map(item=><li>${item}</li>)

                        this.mapArrary()

                    }</ul>
                </div>




            </div>
        )
    }
}



var list = ["111","222","333"];

var newlist = list.map(item=>`<li>${item}</li>`)

console.log(newlist.join(""))
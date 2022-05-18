import React, { Component } from 'react'




export default class App extends Component {


    state = {
        list:["111","222","333"]
    }


    mapArrary(){
        let li = this.state.list.map((item,num)=>{return <li key={num}>{item+"---"+num}</li>})
        return li
    }


    // set key value is for reuse of list, inprove the performance,
    // ideal key value is unique value, liek index of the list
    // if we do not need to CRUD list or reset the list, we can set key vlaue to index


    render() {
        return (
            <div>
                <input type="text"></input>
                <button>show</button>

                <div>
                    <ul>{

                        this.state.list.map(item=><li>{item}</li>)

                        // this.mapArrary()

                    }</ul>
                </div>




            </div>
        )
    }
}



var list = ["111","222","333"];

var newlist = list.map(item=>`<li>${item}</li>`)

console.log(newlist.join(""))
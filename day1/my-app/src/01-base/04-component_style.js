import React, { Component } from 'react'

import './css/01-index.css' // importing css moudle which is supported by webpack 




export default class App extends Component {
    render() {
        var myname = "Chris"
        var obj = {
            background:"yellow",
            fontSize:"10em"
        }


        return (
            <div>
                {10 + 20}-{myname}
                <hr></hr>
                {10 > 20?'aaa':'bbb'}

                <hr></hr>

                <div style={obj}>11111111111111</div>
                <div style={{background:"red",fontSize:"10em"}}>22222222222222</div>

                <div className="active">3333333333333</div>

                <div id="">practice</div>

                <label htmlFor="username">username</label>
                <input type="text" id="username"></input>

            </div>
        )
    }
}

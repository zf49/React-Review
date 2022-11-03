import React, { Component } from 'react'

export default class App extends Component {

    state= {
        myname:"chris"
    }
    
    componentWillMount(){
        console.log("willmount",this.state.myname)

    }

    componentDidMount(){
        console.log("didmount")
// axios 请求阿贾克斯
    }


    render() {
        {console.log("render")}

        return (
            <div>
            </div>
        )
    }
}

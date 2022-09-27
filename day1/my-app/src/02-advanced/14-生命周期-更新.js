import React, { Component } from 'react'

export default class App extends Component {

    state={
        myname:"chris"
    }


    changeName = ()=>{
        this.setState({
            myname:"王治方"
        })
    }


    render() {
        return (
            <div>

                <button onClick={
                    ()=>{
                        this.changeName()
                    }
                }>changeName</button>


                {this.state.myname}
            </div>
        )
    }

    componentWillUpdate(){
        console.log("will update")
    }

    componentDidUpdate(){
        console.log("Did update")

    }

}

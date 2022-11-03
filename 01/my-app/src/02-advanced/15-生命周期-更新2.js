import React, { Component } from 'react'

export default class App extends Component {

    state = {
        myName: "Chris"
    }

    changeName = ()=>{

        this.setState({
            myName:"王治方"
        })
        

        
    }


    render() {
        return (
            <div>
                {this.state.myName}
                <button onClick={()=>{
                    this.changeName()
                }}>
                    15Click
                </button>

            </div>
        )
    }

    UNSAFE_componentWillUpdate(){
        console.log("will update")
    }

    componentDidUpdate(){
        console.log("Did update")

    }

    shouldComponentUpdate(nextProps, nextState){

        // this.state 老状态
        // nextState 新状态


        if(JSON.stringify(this.state) !== JSON.stringify(nextState)){
            return true
        }else{
            return false
        }
    }

}

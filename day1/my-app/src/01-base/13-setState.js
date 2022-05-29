import React, { Component } from 'react'

export default class App extends Component {

    state={
        count:1
    }


    addCount2 = ()=>{

        setTimeout(()=>{
            this.setState({
                    count:this.state.count+1},()=>{
                        console.log(this.state.count)
                    })
            this.setState({
                    count:this.state.count+1},()=>{
                        console.log(this.state.count)
                    })
            this.setState({
                        count:this.state.count+1},()=>{
                            console.log(this.state.count)
                        })
        
    
               
        },0)


    }



    addCount = ()=>{
        
        
        this.setState({
            count:this.state.count+1},()=>{
                console.log(this.state.count)
            })
    this.setState({
            count:this.state.count+1},()=>{
                console.log(this.state.count)
            })
    this.setState({
                count:this.state.count+1},()=>{
                    console.log(this.state.count)
                })


    }

    render() {
        return (
            <div>
                {this.state.count}

                <button onClick={this.addCount}>Add count</button>

                <button onClick={this.addCount2}>Add count222</button>

            </div>
        )
    }
}

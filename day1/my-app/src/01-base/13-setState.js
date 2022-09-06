import React, { Component } from 'react'

export default class App extends Component {

    state={
        count:1,
        test:0
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



    jia1 = ()=>{
        let a = this.state.test+1;
        console.log(a)
        this.setState({
            test:a
        })

    }

    render() {
        return (
            <div>
                {this.state.count}

                <button onClick={this.addCount}>Add count</button>

                <button onClick={this.addCount2}>Add count222</button>



            <hr>
            </hr>
            <br></br>

            <button onClick={()=>{
                this.jia1()
            }}>加一</button>
            {this.state.test}



            </div>
        )
    }
}

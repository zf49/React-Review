import React, { Component } from 'react'

export default class App extends Component {


    inputValue = React.createRef()
    
    state = {
        content:[]
    }


    inputContent(){

        var newNum = this.inputValue.current.value

        let copyList = [...this.state.content]

        copyList.push(newNum)

        this.setState({
            content:copyList
        })
    }

    render() {
        return (
            <div>
                
                <input type="text" ref={this.inputValue}></input>
                <button onClick={()=>{
                    
                        this.inputContent()
                        console.log(this.state.content)
                        }}>input</button>
                <hr></hr>

                <div>
                    <ul>{     
                       this.state.content.map(item=><li>{item}</li>)
                    }
                    </ul>
                </div>
                

            </div>
        )
    }



}

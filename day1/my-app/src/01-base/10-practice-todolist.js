import React, { Component } from 'react'

export default class App extends Component {


    inputValue = React.createRef()
    
    state = {
        content:[]
    }


    inputContent(){

        var newNum = this.inputValue.current.value

        let copyList = [...this.state.content]
        // let copyList = newNum.slice();

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
                       this.state.content.map((item,index)=>{return <li key={index}>{item}<button>delete</button></li>})
                    }
                    </ul>
                </div>
                

            </div>
        )
    }



}







import React, { Component } from 'react'

export default class App extends Component {

    handleClick(){
        console.log("add2")
    }

    add3 = ()=>{
        console.log("add3")

    }


    render() {
        return (
            <div>

              <input></input>

              <button onClick={()=>{
                  alert("event_binding")
              }}>Add1</button>  
              
              <button onClick={this.handleClick}>Add2</button>  

              <button onClick={this.add3}>Add3</button>

            </div>
        )
    }
}







import React, { Component } from 'react'

export default class App extends Component {

    add1 = ()=>{
        console.log("add1",this.myref.current
        .value)

    }

    myref = React.createRef();

    render() {
        return (
            <div>

              {/* <input ref="mytext1" ></input> */}
              <input ref={this.myref} ></input>
        
              <button onClick={()=>{
                  this.add1()  //recommand
              }}>Add1</button>

            </div>
        )
    }
}

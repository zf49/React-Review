





import React, { Component } from 'react'

export default class App extends Component {

    a = 100;

    handleClick(){
        console.log("add2"+this.a)
    }

    add3 = (evt)=>{
        console.log("add3"+this.a,"--",evt)

    }

    add4 = ()=>{
        console.log("add4"+this.a)

    }

    render() {
        return (
            <div>

              <input></input>

              <button onClick={()=>{
                  console.log("add1","a = "+this.a)
              }}>Add1</button>  
              
              <button onClick={this.handleClick.bind(this)}>Add2</button>  

              <button onClick={this.add3}>Add3</button>


              <button onClick={()=>{
                  this.add4()  //recommand
              }}>Add4</button>

            </div>
        )
    }
}


// there are 3 method which can change directing of 'this'
// call: change this, execute the function automatically
// apply: change this, execute the function automatically
// bind: change this, will not execute the function automatically, need add ()

var obj1 = {
    name: "obj1",
    getName(){
        console.log(this.name)
    }
}

var obj2 = {
    name: "obj2",
    getName(){
        console.log(this.name)
    }
}

// obj1.getName();
// obj2.getName();


// obj1.getName.call(obj2) // change this to 1st param

// obj1.getName.apply(obj2) // change this to 1st param

// obj1.getName.bind(obj2)()
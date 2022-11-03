import React, { Component } from 'react'

export default class App extends Component {


    state={
        test:"123",
        is123:true

    }


    render(){
       return(
           <div>

            <button onClick={
                ()=>{
                    this.setState({
                        is123:!this.state.is123
                    })

                   if(this.state.is123){
                    console.log("123逻辑")
                   }else{
                       console.log("456逻辑")
                   }

                }
            }>{this.state.is123?"123":"456"}</button>

           </div>
       )
    }


// constructor(){
//     super()
//     this.state = {
//         text:"Like",
//         show:true,
//         myname:"Chirs",
//         test1:"Chris",
//         flag:true
//     }
// }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.myname}</h1>

//                 <button onClick={()=>{

//                         this.setState({
//                             show:!this.state.show,
//                             myname:"Zhifang Wang"  
//                         })
//                 }}>{this.state.show?"Like":"unlike"}</button>
// <br></br>
// <hr></hr>
            
// <h1>Name: {this.state.flag?"Chris":"Zhifang Wang"}</h1>

// <button onClick={
//     ()=>{

//         this.setState({
//             flag:!this.state.flag
//         })

//     }
// }>change name</button>


// </div>
//         )
//     }
}


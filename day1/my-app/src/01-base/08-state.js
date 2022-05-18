import React, { Component } from 'react'

export default class App extends Component {


constructor(){
    super()
 this.state = {
        text:"Like",
        show:true,
        myname:"Chirs",
        test1:"Chris",
        flag:true
    }
}


    // state = {
    //     text:"Like",
    //     show:true

    // }

    render() {
        return (
            <div>
                <h1>{this.state.myname}</h1>

                <button onClick={()=>{

                        this.setState({
                            show:!this.state.show,
                            myname:"Zhifang Wang"  
                        })
                }}>{this.state.show?"Like":"unlike"}</button>
<br></br>
<hr></hr>
            
<h1>Name: {this.state.flag?"Chris":"Zhifang Wang"}</h1>

<button onClick={
    ()=>{

        this.setState({
            flag:!this.state.flag
        })

    }
}>change name</button>


</div>
        )
    }
}

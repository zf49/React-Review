import React, { Component } from 'react'

export default class App extends Component {

    state = {
        text:"Like",
        show:true

    }



    render() {
        return (
            <div>
                <h1>Welcome React review</h1>

                <button onClick={()=>{

                        this.setState({
                            show:!this.state.show
                        })

                        if(this.state.show){
                            console.log("Like")
                        }else{
                            console.log("unLike")
                        }



                }}>{this.state.show?"Like":"unlike"}</button>




            </div>
        )
    }
}

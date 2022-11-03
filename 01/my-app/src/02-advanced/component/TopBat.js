import React, { Component } from 'react'

export default class TopBat extends Component {


    centerClick = ()=>{
        console.log("123")
        this.props.center();

    }



    render() {
        return (
            <div style={{
                "background":"yellow",
                "textAlign":"center",
                "overflow":"hidden"
            }}>
                <button style={{"float":"left"
                }}>Back</button>
                
                <span>Film</span>
                
                
                <button style={{
                    "float":"right"
                }} onClick={()=>{
                    this.centerClick()
                }}>Centre</button>
                
            </div>
        )
    }
}

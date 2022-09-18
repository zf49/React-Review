import React, { Component } from 'react'

export default class Field extends Component {

    state={
        value:""
    }


    render() {
        return (
            <div style={
                {
                   "background":"yellow" 
                }
            }>
                <label>{this.props.label}</label>:
                <input type={this.props.type} onChange={
                    (event)=>{
                        this.setState({
                            value:event.target.value
                        })
                    }
                } value={
                    this.props.value
                }></input>
            </div>
        )
    }
}

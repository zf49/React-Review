import React, { Component } from 'react'


class Child extends Component{
    



    render() {
        return (
            <div>
                18children-{this.props.text}


                <button onClick={
                   ()=>{
                       this.props.text="333333333333"
                   } 
                }>click - child component</button>

            </div>
        )
    }

}




export default class App extends Component {

    state = {
        text:"11111111111"
    }

    handleOnclick = ()=>{
        this.setState({
            text:"22222222222"
        })
    }

    render() {
        return (
            <div>
                <button onClick={
                    this.handleOnclick
                }>click change props</button>

                <Child text={this.state.text}/>
            </div>
        )
    }
}




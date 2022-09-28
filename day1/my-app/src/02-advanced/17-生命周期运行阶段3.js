import React, { Component } from 'react'




class Child extends Component{

    render() {
        return (
            <div>
                Child123
            </div>
        )
    }

    componentWillReceiveProps(){
        
    }

}


export default class App extends Component {
    render() {
        return (
            <div>
                <Child></Child>
            </div>
        )
    }
}

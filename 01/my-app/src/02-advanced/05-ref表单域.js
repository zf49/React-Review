import React, { Component } from 'react'

import Field from './component2/Field'


export default class App extends Component {

    username = React.createRef()
    password = React.createRef()


    render() {
        return (
            <div>
                <h1>Login Page</h1>

                <Field label="username" type = "text" ref={this.username}>
                </Field>
                <Field label="password" type = "password" ref={this.password}></Field>

                <button onClick={
                    ()=>{
                        console.log(this.username.current)
                    }
                }>Cancel</button>
                <button onClick={
                    ()=>{
                        
                    }
                    
                }>Login</button>

            </div>
        )
    }
}

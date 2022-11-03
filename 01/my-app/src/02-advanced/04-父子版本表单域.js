import React, { Component } from 'react'

import Field from './component2/Field'


export default class App extends Component {

    state={
        username:localStorage.getItem("username"),
        password:""
    }


    render() {
        return (
            <div>
                <h1>Login Page</h1>

                <Field value={this.state.username} label="username" type = "text" onChangeEvent={
                    (value)=>{
                        this.setState({
                            username:value
                        })
                    }
                }></Field>
                <Field value={this.state.password} label="password" type = "password" onChangeEvent={
                    (value)=>{
                        this.setState({
                            password:value
                        })
                    }
                }></Field>

                <button onClick={
                    ()=>{
                        this.setState({
                            username:"",
                            password:""
                        })
                    }
                }>Cancel</button>
                <button onClick={
                    ()=>{
                        console.log(this.state.username+"---"+this.state.password)
                    }
                    
                }>Login</button>

            </div>
        )
    }
}

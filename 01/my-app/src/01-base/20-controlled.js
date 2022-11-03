import React from 'react'

export default class App extends Component {

    state={
        value:"1235"
    }



    render() {
        return (
            <div>
            <h1>登陆页面</h1>

            <input type="text" value={this.state.value} onChange={
                (evt)=>{
                    console.log(evt.target.value)

                    this.setState({
                        value:evt.target.value
                    })


                }
            }></input>
            <button onClick={
                ()=>{
                    console.log(this.state.value)
                }
            }>登陆</button>

            <button onClick={
                ()=>{
                   this.setState({
                       value:""
                   }) 
                }
            }>重制</button>

        </div>
        )
    }
}

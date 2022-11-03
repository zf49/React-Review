import React, { Component } from 'react';

interface IState{
    text:string,
    list:string[]
}
class App extends Component<any,IState> {

    state={
        text:"",
        list:[]
    }

    myref = React.createRef<HTMLInputElement>()

    render() {
        return (
            <div>
                    {/* <input value={this.state.text} onChange={(evt)=>{
                        this.setState({
                            text:evt.target.value
                        })

                    }}></input> */}
                    {/* <button onClick={()=>{
                        console.log(this.state.text)
                    }}>getValue</button> */}


                     <input ref={this.myref} ></input>
                    <button onClick={()=>{
                        console.log((this.myref.current as HTMLInputElement).value)

                        this.setState({
                            list:[...this.state.list,(this.myref.current as HTMLInputElement).value]
                        })
                    }}>getValue</button>

                    {this.state.list.map((item,index)=>{
                       return <li key={index}>{item}</li>
                    })}

            </div>
        );
    }
}

export default App;
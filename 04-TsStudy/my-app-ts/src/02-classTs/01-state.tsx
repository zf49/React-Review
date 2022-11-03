import React, { Component } from 'react';

interface Istate{
    name:string
}



// <约定属性，约定状态>
class App extends Component<any,Istate> {

    state ={
        name:"chris"
    }


    render() {
        return (
            <div>
                class-01-{this.state.name.substring(0,1).toUpperCase()+this.state.name.substring(1)}

                <button onClick={()=>{
                    this.setState({
                        name:"iaoming"
                    })
                }}>change name</button>

            </div>
        );
    }
}

export default App;
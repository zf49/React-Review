import React, { Component } from 'react';

class App extends Component {

    state={
        isShow:true
    }


    render() {
        return (
            <div>
                抽屉
                <hr></hr>
                <Navbar title={"首页"} cb={()=>{
                    this.setState({
                        isShow:!this.state.isShow
                    })
                }}></Navbar>
               {this.state.isShow&& <Sidebar></Sidebar>}
            </div>
        );
    }
}

export default App;

interface IProps{
    title:string,
    cb:()=>void
}

class Navbar extends Component<IProps,any>{
    render(){
        return(
            <div>
                Navbar-{this.props.title}
                <button onClick={()=>{
                    this.props.cb()
                }}>显示与隐藏</button>
            </div>
        )
    }
}


class Sidebar extends Component{
    render(){
        return(
            <div>
                SideBar
            </div>
        )
    }
}
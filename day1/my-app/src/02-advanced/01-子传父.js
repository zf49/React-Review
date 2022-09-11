import React, { Component } from 'react'


class Navbar extends Component{
    render(){
        return(
            <div style={{background:"red"}}>

            <button onClick={
                ()=>{
                    console.log("子通知夫，让父的isShow取反",this.props.event);
                    
                    this.props.event();
                }
            }>click</button>
            <span>NaveBar</span>

            </div> 
        )
    }
}


class SideBar extends Component{
    render(){
        return(
            <div style={{
                background:"yellow",
                width:"200px"
            }}>
                <ul>
                <li>1111111</li>
                <li>2222222</li>
                <li>3333333</li>
                <li>4444444</li>
                <li>5555555</li>
                </ul>
            </div> 
        )
    }
}



export default class App extends Component {

    state={
        isShow:false
    }



    handleEvent = ()=>{
        this.setState({
            isShow:!this.state.isShow
        })
        console.log("父组件")
    }


    render() {
        return (
            <div>
               
            <Navbar event={
                this.handleEvent
            }></Navbar>


           {this.state.isShow && <SideBar></SideBar>}



            </div>
        )
    }


}

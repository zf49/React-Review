import React, { Component } from 'react'


class Box extends Component{

    shouldComponentUpdate(nextProps,nextState){
        if(this.props.current===this.props.index || nextProps.current ===nextProps.index){
            return true
        }else{
            return false
        }
    }

    render(){
        console.log("render")
        return(
            
        <div style={{
            width:"100px",
            height:"100px",
            border: this.props.current === this.props.index?"5px solid red":"1px solid gray",
            margin:"10px",
            float:'left'
        }}>
            {this.props.index}
        </div>
        )
    }
}




export default class App extends Component {

    state ={
        list:  ["00","01","02","03","04","05","06","07","08","09","10"],
        current:5
    }






    render() {
        return (
            <div>
                <input type="number" onChange={(evt)=>{
                    console.log(evt.target.value)
                    this.setState({
                        current:Number(evt.target.value)
                    })
                }} value={
                    this.state.current
                }></input>

               <div style={{
                   overflow:'hidden'
               }}>
                {
                    this.state.list.map((item,index)=>{
                        return <Box key={
                            item
                        } current={this.state.current} index={index}></Box>
                    })
                }
                </div>


            </div>
        )
    }
}

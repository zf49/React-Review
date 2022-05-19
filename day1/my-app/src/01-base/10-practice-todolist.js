import React, { Component } from 'react'
import './css/01-index.css'



export default class App extends Component {


    inputValue = React.createRef()
    
    liValue = React.createRef()



    state = {
        content:[]
    }


    inputContent(){

        var newNum = this.inputValue.current.value

        let copyList = [...this.state.content]

        if (newNum != ''){
        let copyList = [...this.state.content]
        copyList.push(newNum)

        this.setState({
            content:copyList
        })
        }else{
            alert('cannot be null')
        }

        // clear the input value
        this.inputValue.current.value = ""



    }



        delete(index){

            let copyList = [...this.state.content]
            
            // let newList = this.state.content.slice() also can use this method to copy the arrary


            copyList.splice(index,1)

            // splice(index, howmany,item1..itemx)
            // index: whcih position add/delete the element, if use negtive num -> which means from the end of array
            // howmany: how many element do i need to delete, if it is 0, it will not delete nay element



            this.setState({
                content:copyList
            })

        }


    render() {
        return (
            <div>
                
                <input type="text" ref={this.inputValue}></input>
                <button onClick={()=>{
                    
                        this.inputContent()
                        console.log(this.state.content)
                        }}>input</button>

                <hr></hr>

                <div>
                    <ul>{     
                       this.state.content.map((item,index)=>{return <li key={index}>
                          
                           {item}
                       
                       <button onClick={
                           ()=>{
                                this.delete(index)
                           }  
                       }>delete</button></li>})
                    }
                    </ul>
                </div>
                
                {/* conditional rendering */}
                {/* 1.  */}
                {/* {this.state.content.length === 0?<div>No content here</div>:null} */}
                {/* 2. */}
                {/* {this.state.content.length === 0&&<div>No content here</div>} */}
                
                 {/* 3. */}
                 {<div className={this.state.content.length === 0?'':'content'}>No content here</div>}


            </div>
        )
    }



}

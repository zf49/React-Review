import React, { Component } from 'react'

export default class todolist extends Component {

    show = ()=>{
        console.log(this.inputRef.current.value)


        let newList = [...this.state.list]
        newList.push({
            id:Math.random()*10000000000,
            myText:this.inputRef.current.value
        })

        this.setState({
            list: newList
        })

        // 默认输入为空
        this.inputRef.current.value = ""


    }


    delete = (index)=>{

        console.log(index)

        let deltetedList = this.state.list.slice();
        
        // let deltetedList = this.state.list.concat();

        deltetedList.splice(index,1);

        this.setState({
            list:deltetedList
        })

    }



    inputRef = React.createRef();

    state = {
        list:[{
            id:1,
            myText:'111'
        },{
            id:2,
            myText:'222'
        },{
            id:3,
            myText:'333'
        }]
    }
    render() {
        return (
            <div>

                <input type="text" ref={this.inputRef}></input>

                <button onClick={
                    ()=>{this.show()}
                }>add</button>

                <ul>
                   {this.state.list.map((item,index)=>{return <li key={item.id}>{item.myText}   
                   {/* <button onClick={
                      this.delete.bind(this,index)
                   }
                   
                   >delete</button> */}

                   <button onClick={
                       ()=>{
                        this.delete(index)
                       }
                   }>delete</button>


                   </li>})}
                </ul>

                {this.state.list.length===0?<div>暂无待办事项</div>:null}

                   

            </div>
        )
    }



}

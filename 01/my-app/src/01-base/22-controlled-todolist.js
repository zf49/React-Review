import React, { Component } from 'react'

export default class App extends Component {
    
    
    
    show = ()=>{
       


        let newList = [...this.state.list]
        newList.push({
            id:Math.random()*10000000000,
            myText:this.state.inputText,
            isChecked:false
        })

        this.setState({
            list: newList,
            inputText:""
        })

        // 默认输入为空


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



    handleChecked = (index)=>{
        console.log(index)

        let newList = [...this.state.list];

        newList[index].isChecked = !newList[index].isChecked;

        this.setState({
            list:newList
        })

    }




    state = {
        list:[{
            id:1,
            myText:'111',
            isChecked:false
        },{
            id:2,
            myText:'222',
            isChecked:true
        },{
            id:3,
            myText:'333',
            isChecked:true
        }],
        inputText:""
    }





    render() {
        return (
            <div>

                <input type="text" value={this.state.inputText} onChange={(evt)=>{
                    this.setState({
                        inputText:evt.target.value
                    })
                }}></input>



                <button onClick={
                    ()=>{this.show()}
                }>add</button>

                <ul>

                   {this.state.list.map((item,index)=>{return <li key={item.id}><input type="checkbox" checked={item.isChecked} onChange={()=>{
                       this.handleChecked(index)
                   }}></input>
                   {
                   
                   <span dangerouslySetInnerHTML={
                      { __html:item.myText}
                   } style={item.isChecked?{textDecoration:"line-through",textDecorationColor:"red"}:{}}></span>
                   
                   
                   }   











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

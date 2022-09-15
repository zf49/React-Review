import React, { Component } from 'react'

// export default class TabBar extends Component {



//     changeBottomTab = (index)=>{
//         let currentNum = index;


//         console.log("子组件"+currentNum)

//         this.setState({
//             current:currentNum
//         })
//         this.props.event(currentNum)

//     }
//     render() {
//         return (
//             <div>
//                <ul>
//                 {this.props.list.map((item,index) =>{
//                     return <li key={item.id} className={this.props.current===index?"active":""} onClick={()=>{
//                         this.changeBottomTab(index);
//                     }}>{item.text}</li>
//                 })}
//                 </ul>
//             </div>
//         )
//     }
// }


// import React from 'react'

export default function TabBar(props) {
    


    return (
        <div>
             <div>
               <ul>
                {props.list.map((item,index) =>{
                    return <li key={item.id} className={props.current===index?"active":""} onClick={()=>{
                        props.event(index);
                    }}>{item.text}</li>
                })}
                </ul>
            </div>
        </div>
    )
}







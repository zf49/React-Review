import React, { useState } from 'react'
import { Map,List } from "immutable";


export default function App() {

    const persinInfo = {
        info:Map({
            name:'Chris',
            location:Map({
                province:"Liaoning",
                city:'Shenyang'
            }),
            hobby:List(['唱','跳','Rap','篮球'])
        })
    }

    const [getInfo, setgetInfo] = useState(persinInfo)

    function changeName (){


      
       setgetInfo({
           info: getInfo.info.set('name',"王治方").set('location',getInfo.info.get('location').set('city','沈阳').set('province','NZ'))
       })

       console.log(persinInfo)

    }


    function deleteItem(index){
        setgetInfo({
            info: getInfo.info.set('hobby',getInfo.info.get('hobby').splice(index,1))})
        
 
        console.log(persinInfo)
    }


    return (
        <div>
            <h1>Personal Detail</h1>
            <button onClick={()=>{
                changeName()
            }}>change name</button>
            {getInfo.info.get('name')}
            <br></br>
            <hr></hr>
            {getInfo.info.get('location').get('province')}
            -
            <br></br>
            {getInfo.info.get('location').get('city')}
            <br></br>
            <hr></hr>
            {getInfo.info.get('hobby').map((item,index)=>{
                return <li key={index}>{item}  <button onClick={()=>{
                    deleteItem(index)
                }}>删除</button></li>
            })}

        </div>
    )
}

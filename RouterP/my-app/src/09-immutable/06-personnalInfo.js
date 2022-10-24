import React, { useEffect, useState } from 'react'
import { Map,List,fromJS } from "immutable";


export default function App() {

    const persinInfo = {
        info:fromJS({
            name:'Chris',
            location:{
                province:"Liaoning",
                city:'Shenyang'
            },
            hobby:['唱','跳','Rap','篮球']
        })
    }

    useEffect(() => {
        console.log(persinInfo.info)
    }, [])



    const [getInfo, setgetInfo] = useState(persinInfo)

    function changeName (){


      
       setgetInfo({
           info: getInfo.info.set('name',"王治方").setIn(['location','city'],'沈阳').setIn(['location','province'],'NZ')
       })

       console.log(persinInfo)

    }


    function deleteItem(index){
        setgetInfo({
            // 数组修改
            // info: getInfo.info.setIn(['hobby',index],'123123123')})
            info: getInfo.info.updateIn(['hobby'],(list)=>{return list.splice(index,1)})

        })
        console.log(persinInfo)
    }


    return (
        <div>
            <h1>06-Personal Detail</h1>
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

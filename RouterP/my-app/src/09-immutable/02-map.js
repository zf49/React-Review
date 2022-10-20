import React, { useState } from 'react'

import {Map} from 'immutable'


const obj = {
    name:'chris',
    age:26,
    address:'12b hillsborough road',

}

// copy
let oldobj = Map(obj)
console.log(oldobj)

// 修改
let newobj = oldobj.set("name","王治方")
console.log(newobj)


// 获取值
console.log(oldobj.get('name'),newobj.get('name'))


// 转换为普通对象
console.log(oldobj.toJS(),newobj.toJS())



// export default function App() {


//         const [info, setinfo] = useState(
//             Map({
//             name:'chris',
//             age:26,  
//         })
//         )


//         function changeNameAndAge(){
//             let newInfo = info.set('name','王治方').set('age','二十六岁')
//             // newInfo = info.set('age',"二十六岁"
//             setinfo(newInfo)
//             console.log(newInfo.toJS())
//         }

//     return (
//         <div>
//             方案1----
            
//             <button onClick={()=>{
//                 changeNameAndAge()
//             }}>Chnage Name and Age</button>




//             {info.get('name')}---
//             {info.get('age')}
//         </div>
//     )
// }




export default function App() {


    const [info, setinfo] = useState(
        {
        name:'chris',
        age:26,  
    }
)


    function changeNameAndAge(){
            let oldInfo =  Map(info);
            let newInfo =oldInfo.set('name','王治方-方案2').set('age','他妈的都26了')

            console.log(newInfo)
            console.log(newInfo.toJS())

            setinfo(newInfo.toJS())


    }   

return (
    <div>
        方案2------
        
        <button onClick={()=>{
            changeNameAndAge()
        }}>Chnage Name and Age</button>----------




        {info.name}---
        {info.age}
    </div>
)
}
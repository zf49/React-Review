import React from 'react'

import {observable,autorun} from'mobx'

// 对于普通类型数据的监听
// 只要10改变了，它就知道
let observableNumber = observable.box(10)
let observableName = observable.box('chris')

// autorun第一次就执行，之后每次改变也会执行
autorun(()=>{

    console.log(observableNumber.get())
})

setTimeout(()=>{
    observableNumber.set(20)
    observableName.set('王治方')

},1000)

export default function App() {
    return (
        <div>
            10
        </div>
    )
}

import React, { Component } from 'react'

export default class App extends Component {
    render() {


        return (
            <div>
               07 
            </div>
        )
    }
}
// 调度中心
var bus = {   
    list:[],
    //订阅
    subscribe(callback){
        // console.log(callback)
        this.list.push(callback)
    },
    //发布
    publish(){
        //遍历所有的列表
        // console.log(this.list)
        this.list.forEach(callback=>{
            callback()
        })
    }
}

// 订阅者
bus.subscribe(()=>{
    console.log("1111111")
})
bus.subscribe(()=>{
    console.log("222222")
})


bus.publish()
import axios from 'axios';
import React, { Component } from 'react'
//调度中心
var bus = {   
    list:[],
    //订阅
    subscribe(callback){
        // console.log(callback)
        this.list.push(callback)
    },
    //发布
    publish(text){
        //遍历所有的列表
        // console.log(this.list)
        this.list.forEach(callback=>{
            callback(text)
        })
    }
}



export default class App extends Component {


    constructor(){
        super();

        this.state= {
            filmList:[]
        }


        axios({
            url:"https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=983941",
            method:'get',
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16623691791635729704747009"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then((res)=>{
            console.log(res.data.data.cinemas)
            this.setState({
                filmList:res.data.data.cinemas
            })
        }).catch((err)=>{
            console.log(err)
        })
    }



    render() {
        return (
            <div>

                {
                  this.state.filmList.map(item=><FilmItem key={item.cinemaId} {...item} onEvent={
                      (value)=>{
                          console.log("父组件",value)

                          this.setState({
                              info:value
                          })

                      }
                  }></FilmItem>)  
                }

                <FilmDetail info={
                    this.state.info
                }></FilmDetail>
            </div>
        )
    }
}


class FilmItem extends Component{
    render(){

        let {name,address,lowPrice,phone} = this.props


       return <div onClick={
           ()=>{
            console.log(lowPrice+"---"+phone)

            bus.publish(lowPrice+"---"+phone)


            // this.props.onEvent(lowPrice+"---"+phone)
           }
       }> 
           <ul>
               
               <li>{name}</li>
               <li>{address}
               </li>
           </ul>
           <hr></hr>
           <br></br>
       </div>
    }  
}

class FilmDetail extends Component{

    constructor(){
        super()
        bus.subscribe((info)=>{
            console.log("我再filmdetail中定义",info)

            this.setState({
                info:info
            })


        })

        this.state={
            info:""
        }

    }

    render(){

    
       return <div className="" style={
           {
               "position":"fixed",
               "right":"0",
               "top":"100px",
               "background":"yellow",
               "width":"200px",
               "height":"200px"
           }
       }>
           {this.state.info}
           {/* filmdetail */}
       </div>
    }  
}
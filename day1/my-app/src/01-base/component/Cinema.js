import React, { Component, createRef } from 'react'

import axios from 'axios'



export default class Cinema extends Component {

    constructor(){
        

        super()


        this.state={
            cinemaList:[],
            bakCinemaList:[]
        }


        // request data

        // axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=9286549").then(res=>{console.log(res)}).catch(err=>{console.log(err)})
        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=9286549",
            method:'get',
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1653143769202670916763649","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res=>{

           this.setState({
               cinemaList:res.data.data.cinemas,
               bakCinemaList:res.data.data.cinemas
           })
            console.log(this.state.cinemaList)
        })
    }


    

    handleInput = (event)=>{


    

        console.log(event.target.value)

        var newList = this.state.bakCinemaList.filter(item=>item.name.toUpperCase().includes(event.target.value.toUpperCase())||
        item.address.toUpperCase().includes(event.target.value.toUpperCase())
        )

        // console.log(newList)


        this.setState({
            cinemaList : newList
        })


    }



    render() {
        return (
            <div>
                
                <input onInput={
                    this.handleInput
                }></input>


                {
                    this.state.cinemaList.map(item=> 
                               <dl>
                                   <dt>{item.name}</dt>
                                   <dt>{item.address}</dt>
                                   <hr>
                                   </hr>
                                </dl>
                    )
                
                }
            
            </div>
        )
    }
}


var arr =["aaa","abb","ccbc"]


var newArr = arr.filter(item=>item.includes("a"))

console.log(newArr)



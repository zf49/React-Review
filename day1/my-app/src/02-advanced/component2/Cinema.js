import React, { Component } from 'react'

import axios from 'axios'



export default class Cinema extends Component {


   

    constructor() {
        super();
    
        this.state={
            cinemaList:[],
            backUp:[]
        };



        axios({
            url:"https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=983941",
            method:'get',
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16623691791635729704747009"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then((res)=>{
             
            this.setState({
                cinemaList:res.data.data.cinemas,
                backUp:res.data.data.cinemas
            })

            console.log(this.state.cinemaList)
        })



    }
    

    onInput = (event)=>{
        let inputValue = event.target.value;
        let newList = this.state.backUp;
        
       let a =  newList.filter(item=>item.name.toUpperCase().includes(inputValue.toUpperCase()))


        this.setState({
            cinemaList:a
        })        
       
    }

    

    render() {
        return (
            <div>
                
                <input onInput={(event)=>{
                    this.onInput(event);
                }}></input>

                {this.state.cinemaList.map(item=>
                <dl key={item.cinmeaID}>
                    <dt>{item.name}</dt>
                    <dd>{item.address}</dd>
                    <hr></hr>
                </dl>    
                )
                }
    
            
            </div>
        )
    }
}



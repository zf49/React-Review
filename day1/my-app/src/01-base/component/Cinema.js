import React, { Component } from 'react'

import axios from 'axios'



export default class Cinema extends Component {

    constructor(){
        super()

        // request data

        // axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=9286549").then(res=>{console.log(res)}).catch(err=>{console.log(err)})
        
        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=9286549",
            method:'get',
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1653143769202670916763649","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res=>{console.log(res.data.data.cinemas)})



    }



    render() {
        return (
            <div>
              Cinema Component  
            </div>
        )
    }
}
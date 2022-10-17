import { useEffect } from "react"
import axios from 'axios'
function getCinemaListAction() {

    return (dispatch)=>{
        axios({
            url:"https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=983941",
            method:'get',
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16623691791635729704747009"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then((res)=>{
             
            // console.log(res.data.data.cinemas)
            dispatch({
                type:"change-list",
                cinemasList:res.data.data.cinemas
            }) 
    
        })
    }

}


export default getCinemaListAction
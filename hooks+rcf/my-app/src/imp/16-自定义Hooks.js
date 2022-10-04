import React, { useState,useEffect } from 'react'

import axios from 'axios'


function useCinemaList(){

const [cinemaList, setcinemaList] = useState([])

useEffect(() => {
    axios({
   url:"https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=983941",
method:'get',
headers:{
   'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16623691791635729704747009"}',
   'X-Host': 'mall.film-ticket.cinema.list'
   }
   }).then((res)=>{
        
      setcinemaList(res.data.data.cinemas)
   }).catch()
}, [])


    return {cinemaList}

}




export default function App() {

    const [list, setlist] = useState([])


    // axios({
    //     url:"https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=983941",
    // method:'get',
    // headers:{
    //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16623691791635729704747009"}',
    //     'X-Host': 'mall.film-ticket.cinema.list'
    //     }
    //     }).then((res)=>{
    //         setlist(res.data.data.cinemas)
    //         console.log(res.data.data.cinemas)
    //     }).catch()



    

    return (
        <div>
            {list.map((item)=>{
                return <li key={item.cinemaId}>{item.name}
                <hr></hr>
                </li>
            })}
        </div>
    )
}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NowPlaying() {

    const [films, setfilms] = useState([])


    useEffect(() => {
        
        axios({
            url:"https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4353734",
            headers:{
                'X-Client-Info': ' {"a":"3000","ch":"1002","v":"5.2.1","e":"16655491463751632458219521"}',
                'X-Host': 'mall.film-ticket.film.list'
            },
            method:"get"
        }).then((res)=>{
            // console.log(res.data.data.films)


            setfilms(res.data.data.films)
        }).catch()
        
    }, [])


    const navigate = useNavigate()

    function toDetail (id:number){
        console.log(id)
        // 跳转页面
        // query 传参 ?id=...
        // navigate(`/detail?id=${id}`)


        // restful 路由传参
        navigate(`/detail/${id}`)



    }




    interface IItem{
        filmId:number,
        name:String
    }


    return (
        <div>
            NowPlaying
            <hr></hr>
            {films.map((item:IItem)=>{
                return <li key={item.filmId} onClick={()=>{
                    toDetail(item.filmId)
                }}>{item.name}</li>
            })}
        </div>
    )
}

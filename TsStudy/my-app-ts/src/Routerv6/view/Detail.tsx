import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
  // 动态路由传参数

    const obj = useParams()
    
    console.log(obj)


    const [detail, setdetail] = useState(Object)


    useEffect(() => {
        
        axios({
            url:"https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4353734",
            headers:{
                'X-Client-Info': ' {"a":"3000","ch":"1002","v":"5.2.1","e":"16655491463751632458219521"}',
                'X-Host': 'mall.film-ticket.film.list'
            },
            method:"get"
        }).then((res)=>{

                // console.log(          res.data.data.films)

                res.data.data.films.map((item:any)=>{
                    console.log(item)
                   if(item.filmId === Number(obj.id)){
                        setdetail(item)
                    }
                })






        }).catch()
        
    }, [])



    return (
        <div>
            <>
                ID:{detail.filmId}
                <br></br>
                Name: {detail.name}
                <br></br>
                图片：<img src={detail.poster} style={{
                    width:'100px',
                    height:'100px'
                }}></img>
            </>
        </div>
    )
}

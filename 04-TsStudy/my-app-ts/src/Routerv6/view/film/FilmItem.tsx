import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function FilmItem(props:any) {


    const navigate = useNavigate()

    function toDetail (id:number){
        console.log(id)
        // 跳转页面
        // query 传参 ?id=...
        // navigate(`/detail?id=${id}`)


        // restful 路由传参
        navigate(`/detail/${id}`)

    }


    return (
        <div>
            <>
            <li onClick={()=>{
                toDetail(props.filmId)
            }}>{props.name}</li>
            </>
        </div>
    )
}

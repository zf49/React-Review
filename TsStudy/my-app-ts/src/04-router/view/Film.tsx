import React, { useEffect, useState} from 'react'



import axios from 'axios'
import { useNavigate } from 'react-router-dom';


interface IItem{
    name:String,
    filmId:number,

}

export default function Film(props:any) {


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
            console.log(res.data.data.films)


            setfilms(res.data.data.films)
        }).catch()
        
    }, [])

    let navigate = useNavigate()
  
    function toDetails(id:number){
        console.log(props.history)


        navigate(`/film/${id}`,{replace:true})

    }   


    return (
        <div>
            Films
            <hr></hr>
            {films.map((item:IItem)=>{
               return <li key={item.filmId} onClick={()=>{

                toDetails(item.filmId)

               }}>{item.name}</li>

            })}



        </div>
    )
}

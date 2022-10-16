import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, useHistory,withRouter } from 'react-router-dom'



export default function NowPlaying(props) {
    
    const [nowPlayList, setnowPlayList] = useState([])


    useEffect(() => {
        axios({
            url:"https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4353734",
            headers:{
                'X-Client-Info': ' {"a":"3000","ch":"1002","v":"5.2.1","e":"16655491463751632458219521"}',
                'X-Host': 'mall.film-ticket.film.list'
            },
            method:"get"
        }).then((res,rep)=>{
            console.log(res.data.data.films)
            setnowPlayList(res.data.data.films)

        })
    }, [])

    const history = useHistory()

    const handleChangePage = (filmId)=>{
        // console.log("#/detail/"+filmId)
        // window.location.href="#/detail/"+filmId

        // Method 1
        // console.log(props)
        // props.history.push(`/detail/${filmId}`)
        // history.push(`/detail/${filmId}`)

        // Method 2
        history.push({
            pathname:'/detail',
            state:{
                'chrisId':filmId
            }
        })
        // Method 3
        // history.push({
        //     pathname:'/detail',
        //     query:{
        //         chrisId:filmId
        //     }
        // })


    }




    return (
        <div>
            NowPlaying
            
            {nowPlayList.map((item)=>{
               return <FilmItem key={item.filmId} {...item}></FilmItem>
            })}
            
        </div>
    )
}




function FilmItem(props){
    console.log(props)

    let history = useHistory();
    
    let {name,filmId,poster} = props

    return (
        
        <li key={filmId} onClick={()=>{
            console.log(filmId)
            history.push(`/detail/${filmId}`)
           }}>
            {/* <NavLink to={"/detail/" + filmId}>{name}</NavLink> */}

           <img src={poster} style={{
               width:'100px',
               height:'100px'
           }}></img>
           {name}


           </li>
    )
}



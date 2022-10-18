import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

export default function Comingsoon() {

    const [comingsoonList, setcomingsoonList] = useState([]) 

    useEffect(() => {
        axios({
            method:'get',
            url:'/Movies/GetComingSoon'
        }).then((res,rep)=>{
            console.log(res.data.Data.Movies)
            setcomingsoonList(res.data.Data.Movies)
        })
    }, [])


    return (
        <div>
            {comingsoonList.map((item,index)=>{
                return <ComingSoonFilm key={index} {...item}/>
            })}
        </div>
    )
}


function ComingSoonFilm (props){
    let {Id,Name,LargePosterUrl} = props

    let history = useHistory()

    return(
    <div>
        <li onClick={()=>{
            history.push(`/detail/${Id}`)
        }}>
            {/* <NavLink to={'/detail/'+Id}>
            <img src={LargePosterUrl} style={{
                width:"100px",
                height:"100px"
            }}></img>{Name}
            </NavLink> */}

            {Name}
            <img src={LargePosterUrl} style={{
                width:"100px",
                height:"100px"
            }}></img>
        </li>
    </div>)
}

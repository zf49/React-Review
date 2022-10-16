import React, { useEffect, useState } from 'react'

import store from './../redux/store'

import CityReducer from './../redux/reducer/CityReducer'
export default function Cinemas(props) {

    const [cityName, setcityName] = useState(store.getState().CityReducer.cityName)


    // useEffect(() => {
    //     store.subscribe(()=>{
    //       console.log("cinemas 中订阅",store.getState())
    //     })
    //     setcityName(store.getState().cityName)
    //   }, [])


    return (
        <div onClick={()=>{
            props.history.push(`/city`)
        }}>
            Cinemas-component

            <h1>{cityName}</h1>
        </div>
    )
}

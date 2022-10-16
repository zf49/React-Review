import React, { useEffect, useState } from 'react'
import cities from 'cities.json';
import store from './../redux/store'
import cityname from './../redux/actionCreator/CityActionCreater'
import CityReducer from './../redux/reducer/CityReducer'

export default function City(props) {


    const [cityNames] = useState(cities.slice(0,20))

   




   function toCinemaWithCityName (name){
    //    console.log(name)

    store.dispatch(cityname(name))

    console.log(name)
        props.history.push(`/cinemas`)
    }


    return (
        <div>
            {/* {console.log(cityNames)} */}
            {cityNames.map((item,index)=>{
              return <li key={index} onClick={()=>{

                  toCinemaWithCityName(item.name)
              }}>{item.name}</li>
            })}
           

        </div>
    )
}

import React, { useEffect, useState } from 'react'
import cities from 'cities.json';


import {connect} from 'react-redux'

 function City(props) {


    const [cityNames] = useState(cities.slice(0,20))

   




//    function toCinemaWithCityName (name){
//     //    console.log(name)

//     store.dispatch(cityname(name))

//     console.log(name)
//         props.history.push(`/cinemas`)
//     }


    return (
        <div>
            {/* {console.log(cityNames)} */}
            {cityNames.map((item,index)=>{
              return <li key={index} onClick={()=>{
                    props.cityname(item.name)
                    props.history.push(`/cinemas`)
              }}>{item.name}</li>
            })}
           

        </div>
    )
}


const mapDispatchToProps = {
    cityname(name){
        return {
            type: "changecity",
            ctname:name
        }
    }
}

export default connect(null,mapDispatchToProps)( City)
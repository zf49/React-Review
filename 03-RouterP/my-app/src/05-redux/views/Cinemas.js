import React, { useEffect, useState } from 'react'

import store from './../redux/store'
import getCinemaListAction from './../redux/actionCreator/cinemaListAction'

export default function Cinemas(props) {

    const [cityName] = useState(store.getState().CityReducer.cityName)

    const [cinemaList, setcinemaList] = useState(store.getState().CinemaListReducer.cinema)



    useEffect(() => {

        // console.log(store.getState().CinemaListReducer.cinema)

        if(store.getState().CinemaListReducer.cinema.length === 0){
            // get the data from back-end
            // in actionCreator write the async function to request the data 
            store.dispatch(getCinemaListAction())

        }else{
            // use data from chache
            console.log("store,缓存")   
        }
        let unsubscribe = store.subscribe(()=>{
            console.log("cinemas subscribe",store.getState().CinemaListReducer.cinema)  
            
            setcinemaList(store.getState().CinemaListReducer.cinema)
        })

        return ()=>{
            console.log("销毁")
            unsubscribe()
        }
    }, [])



    return (
        <div>
      <div style={{
          overflow:'hidden'
      }}>
            <div onClick={()=>{
            props.history.push(`/city`)
        }} style={{
            float:'left'
        }}>

            <h1>{cityName}</h1>
            </div>

            <div style={{
                float:'right'
            }} onClick={()=>{
                props.history.push(`/cinemas/search`)
            }}><h1>Search</h1>
            </div>



            </div>

            <div>
        
            
            
            <div>
            {cinemaList.map((item)=>{
                return <dl key={item.cinemaId} style={{
                    padding:"10px"
                }}>
                    <dt>{item.name}</dt>
                    <dd style={{
                        fontSize:'12px',
                        color:'gray'
                    }}>{item.address}</dd>
                    </dl>

            })}
        </div>
      </div>
      </div>
    )
}

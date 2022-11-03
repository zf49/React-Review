import React,{useState,useEffect, useMemo} from 'react'
import {store} from './../redux/store'

import getCinemaListAction from './../redux/actionCreator/cinemaListAction'


export default function Search() {

    const [cinemaList, setcinemaList] = useState(store.getState().CinemaListReducer.cinema)

    const [value,setValue] = useState("")
    




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

        //subscribe
        let unsubscribe = store.subscribe(()=>{
            console.log("cinemas subscribe",store.getState().CinemaListReducer.cinema)  
            
            setcinemaList(store.getState().CinemaListReducer.cinema)
        })

        return ()=>{
            // destory sunscribe
            console.log("销毁")
            unsubscribe()
        }
    }, [])


    let getCinemaList = useMemo(() =>{
       return cinemaList.filter((item)=>{
            return item.name.toUpperCase().includes(value.toUpperCase())||item.address.toUpperCase().includes(value.toUpperCase())
        })
    }, [cinemaList,value])



    




    return (
        <div>
            <div>
                <input value={value} style={{
                    width:'100%'
                }} onChange={
                    (evt)=>{
                        setValue(evt.target.value)
                    }
                }></input>
            </div>


            <div>
        {getCinemaList.map((item)=>{
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
        
    )
}

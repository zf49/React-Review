import React, { useEffect, useState } from 'react'

import getCinemaListAction from './../redux/actionCreator/cinemaListAction'

import {connect} from 'react-redux'





 function Cinemas(props) {

    let {list,getCinemaListAction} = props


    // const [cityName] = useState(store.getState().CityReducer.cityName)

    // const [cinemaList, setcinemaList] = useState(store.getState().CinemaListReducer.cinema)



    useEffect(() => {

        // console.log(store.getState().CinemaListReducer.cinema)

        if(list.length === 0){
            // get the data from back-end
            // in actionCreator write the async function to request the data 
            // store.dispatch(getCinemaListAction())
           getCinemaListAction()

        }else{
            // use data from chache
            console.log("store,缓存")   
        }
     
    

   
    }, [list,getCinemaListAction])



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

            <h1>{props.cityName}</h1>
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
            {props.list.map((item)=>{
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


const mapStateToProps = (state) => {
    return {
        list: state.CinemaListReducer.cinema,
        cityName: state.CityReducer.cityName
    }
}



const mapDispatchToProps = {
    getCinemaListAction
}

export default connect(mapStateToProps,mapDispatchToProps)(Cinemas) 
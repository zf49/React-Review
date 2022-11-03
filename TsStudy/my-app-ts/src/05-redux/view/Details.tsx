import React, { useEffect } from 'react'


import {  useParams } from "react-router-dom";
import store from '../redux/store';


export default function Details() {



    useEffect(() => {
        store.dispatch({
            type:"hide"
        })
        return () => {
            store.dispatch({
                type:"show"
            })
        }
    }, [])





    let params = useParams();
    console.log(params)
    return (
        <div>
            {params.chrisId}
        </div>
    )
}

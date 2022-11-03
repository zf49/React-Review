import React from 'react'


import {  useParams } from "react-router-dom";


export default function Details() {

    let params = useParams();
    console.log(params)
    return (
        <div>
            {params.chrisId}
        </div>
    )
}

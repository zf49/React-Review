import React from 'react'


import {  useParams } from "react-router-dom";


export default function Details(props:any) {

    let params = useParams();

    return (
        <div>
            {params.id}
        </div>
    )
}

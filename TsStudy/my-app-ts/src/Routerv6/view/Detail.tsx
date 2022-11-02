import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Detail() {
    // query url传参数，使用 useSearchParams()获取
   const [searchParams,setSearchParams] = useSearchParams()
    console.log(searchParams.get('id'))

    
    return (
        <div>
            detail
        </div>
    )
}

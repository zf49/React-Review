import React from 'react'

export default function Center(props) {
    return (
        <div>
            Center

            <div onClick={()=>{
                // props.history.push(`/filmsorder`)


                console.log(props)
                props.history.push(`/filmsorder`)

            }}>电影订单</div>
            <div></div>


        </div>
    )
}

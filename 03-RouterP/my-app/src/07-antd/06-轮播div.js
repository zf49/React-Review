import React from 'react'
import { Carousel } from 'antd';


const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  

export default function CarouselDiv(props) {
    
    let {currrentId} = props

    console.log(currrentId)

    if(currrentId ===0 ){
            currrentId = -1
    }



    return (
        <div>
                <Carousel>
                    <div >
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    
                </Carousel>
        </div>
    )
}

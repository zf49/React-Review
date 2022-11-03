import React, { Suspense, useState } from 'react'

const NowPlaying = React.lazy(()=> import('./view/NowPlaying'))

const ComingSoon = React.lazy(()=>import('./view/ComingSoon'))


export default function App() {

    const [type, setType] = useState(1)


  

    return (
        <div>
            Lazy + suspense
            <br></br>
            <hr></hr>
            <button onClick={()=>{
                setType(1)
            }}>Now Playing</button>
            <button onClick={()=>{
                setType(2)
            }}>Coming Soon</button>

           <Suspense fallback={<div>Loading.....</div>}>
                {type===1?<NowPlaying></NowPlaying>:<ComingSoon></ComingSoon>}
           </Suspense>



           
        </div>
    )
}

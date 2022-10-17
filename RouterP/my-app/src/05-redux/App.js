
import IndexRouter from './Router/IndexRouter'

import Tabbar from './Components/Tabbar'
import'./../04-router/views/css/App.css'
import { useEffect, useState } from 'react'

import store from './redux/store'



function App() {

  const [isShow, setisShow] = useState(store.getState())



  useEffect(() => {
    store.subscribe(()=>{
      // console.log("app 中订阅",store.getState())

      setisShow(store.getState().TabbarReducer.show)
    })
    
  }, [])


  
  return (
   <div>


     <IndexRouter>

       {isShow&&<Tabbar></Tabbar>}
     </IndexRouter>


   </div>

  )
}

export default App;

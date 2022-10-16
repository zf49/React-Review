
import IndexRouter from './Router/IndexRouter'

import Tabbar from './Components/Tabbar'
import'./../04-router/views/css/App.css'
import { useEffect } from 'react'

import store from './redux/store'



function App() {

  useEffect(() => {
    store.subscribe(()=>{
      console.log("app 中订阅")
    })
    
  }, [])


  
  return (
   <div>


     <IndexRouter>
        <Tabbar></Tabbar>
     </IndexRouter>


   </div>

  )
}

export default App;

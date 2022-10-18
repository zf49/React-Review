
import IndexRouter from './Router/IndexRouter'

import Tabbar from './Components/Tabbar'
import './views/css/App.css'
import { useEffect, useState } from 'react'

import store from './redux/store'

import {connect} from 'react-redux'


function App(props) {




  useEffect(() => {
    store.subscribe(()=>{
      console.log(props)
    })
    
  }, [])


  
  return (
   <div>


     <IndexRouter>

       {props.isShow&&<Tabbar></Tabbar>}
     </IndexRouter>


   </div>

  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    a:1,
    b:2,
    isShow:state.TabbarReducer.show
  }

}



export default connect(mapStateToProps)(App);

import React, { useEffect } from 'react'
import { hide, show } from '../redux/actionCreator/TabbarActionCreator'
import store from './../redux/store'
import TabbarReducer from './../redux/reducer/TabbarRdeucer'

import {connect} from 'react-redux'





function Detail(props) {
    console.log(props.match.params.chrisId,"利用Id拿后端数据 ------动态路由")

    // console.log(props)



    let {show, hide} = props

    
    useEffect(() => {
        hide()
        return ()=>{
        show()

        }

    }, [props.match.params.chrisId,show,hide])    



    return (
        <div>
           ID: {props.match.params.chrisId}
        </div>
    )
}

// connect(props,function())
// connect 1 param means that the props or function will send to children component,  

 const mapDispatchToProps =  {
        show,
        hide     
    }




export default connect(null,mapDispatchToProps)(Detail)
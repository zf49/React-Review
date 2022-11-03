import {legacy_createStore as createStore} from 'redux'


interface IAction{
    type:string,
    payload?:any
}

const reducer = (preState={

    isShow:true

},action:IAction)=>{
    const{type} = action
    const newState = {...preState}
    switch(type){
        case "show":
            newState.isShow = true
            return newState
        case "hide":
            newState.isShow = false
            return newState
        default:
            return preState
    }


}



const store = createStore(reducer);

export default store


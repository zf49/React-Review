import { legacy_createStore as createStore} from 'redux'

const reducer = (preState={
    show:true,

}, action)=>{
    console.log(action)
    let newState = {...preState}
    switch (action.type) {
        case "hide-tabbar":
            newState.show=false    
            return newState
        case "show-tabbar":
            newState.show=true    
            return newState
        default:
            return preState
    }


}


const store = createStore(reducer);

export default store
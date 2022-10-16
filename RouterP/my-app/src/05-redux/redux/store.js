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

function createChirsStore(reducer){
    let list = []
    let state = reducer(undefined,{})


    function subscribe(callback){
        list.push(callback)
    }

    function dispatch(action){
        state = reducer(state,action)
        for(let i in list){
            list[i] && list[i]()
        }
    }

    function getState(){
        return state
    }

    return{
        subscribe,
        dispatch,
        getState
    }

}






export default store
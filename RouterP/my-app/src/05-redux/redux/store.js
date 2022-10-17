import { applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'

// const reducer = (preState={
//     show:true,
//     cityName:"Beijing"
// }, action)=>{
//     console.log(action)
//     let newState = {...preState}



//     switch (action.type) {
//         case "hide-tabbar":
//             newState.show=false    
//             return newState
//         case "show-tabbar":
//             newState.show=true    
//             return newState
        
//         case "changecity":
//             newState.cityName=action.ctname
//             return newState
//         default:

//             return preState
//     }

//     // newState

// }

import CityReducer from './reducer/CityReducer'

import TabbarReducer from './reducer/TabbarRdeucer'

import CinemaListReducer from './../redux/reducer/CinemaListReducer'

import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'




const reducer = combineReducers({CityReducer,
TabbarReducer,CinemaListReducer})


const store = createStore(reducer,applyMiddleware(reduxThunk,reduxPromise));

// function createChirsStore(reducer){
//     let list = []
//     let state = reducer(undefined,{})


//     function subscribe(callback){
//         list.push(callback)
//     }

//     function dispatch(action){
//         state = reducer(state,action)
//         for(let i in list){
//             list[i] && list[i]()
//         }
//     }

//     function getState(){
//         return state
//     }

//     return{
//         subscribe,
//         dispatch,
//         getState
//     }

// }






export default store
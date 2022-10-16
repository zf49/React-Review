import { legacy_createStore as createStore} from 'redux'

const reducer = (preState, action)=>{
    console.log(preState+"----------")
    return preState
}


const store = createStore(reducer);

export default store
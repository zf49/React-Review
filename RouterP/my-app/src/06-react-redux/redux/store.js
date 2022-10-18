import { applyMiddleware, combineReducers,compose,legacy_createStore as createStore} from 'redux'

import CityReducer from './reducer/CityReducer'

import TabbarReducer from './reducer/TabbarRdeucer'

import CinemaListReducer from './../redux/reducer/CinemaListReducer'

import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'


import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
    withlist:['CityReducer']
  }


  const reducer = combineReducers({CityReducer,
    TabbarReducer,CinemaListReducer})

  const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore( 
    persistedReducer, 
    composeEnhancers(applyMiddleware(reduxThunk,reduxPromise)))

let persistor = persistStore(store)



export {store,persistor}
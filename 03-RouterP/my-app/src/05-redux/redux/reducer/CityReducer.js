const CityReducer = (preState={
    cityName:"Beijing"
}, action)=>{
    console.log(action)
    let newState = {...preState}



    switch (action.type) {
        case "changecity":
            newState.cityName=action.ctname
            return newState
        default:

            return preState
    }

    // newState

}

export default CityReducer
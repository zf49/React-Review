const CinemaListReducer = (preState={
    cinema:[]
}, action)=>{
    console.log(action)
    let newState = {...preState}

    switch (action.type) {
        case "change-list":
            newState.cinema=action.cinemasList
            return newState
        default:

            return preState
    }

    // newState

}

export default CinemaListReducer
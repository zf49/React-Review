const TabbarReducer = (preState={
    show:true
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

    // newState

}

export default TabbarReducer
import {createSlice} from'@reduxjs/toolkit'

const initialState = {
    count :0
}

export const counterSlice=createSlice({
    name:'counter1',
    initialState,
    reducers:{
        increment:(state)=>{
            state.count += 1;
        },
        decrement:(state)=>{
            state.count -= 1;
        },
        reset:(state)=>{
            state.count=initialState.count
        }
    }
})

export const {increment, decrement,reset} = counterSlice.actions

export default counterSlice.reducer
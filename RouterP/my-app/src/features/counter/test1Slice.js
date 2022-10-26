import {createSlice} from'@reduxjs/toolkit'

const initialState= {
    testIS:"aaaaa"
}



export const testSlice=createSlice({
    name:'test123',
    initialState,
    reducers:{
        changeName:(state)=>{
            state.testIS = "bbbbbb"
        }
    }
})



export const {changeName} = testSlice.actions

export default testSlice.reducer
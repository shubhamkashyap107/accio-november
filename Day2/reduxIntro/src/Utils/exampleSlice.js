import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
    name : "example",
    initialState : [],
    reducers : {
        addData : (state, action) => {
            console.log(action.type)
            state.push(action.payload)
        }, 
        removeData : (state, action) => {
            // console.log(action.type)
            let filteredData = state.filter((item) => {
                return item != action.payload
            })
            // console.log(filteredData)
            while(state.length)
            {
                state.pop()
            }
            state.push(...filteredData)
        },
        doSomething : () => {

        }
    }
})

export default exampleSlice.reducer
export const{addData, removeData, doSomething} = exampleSlice.actions

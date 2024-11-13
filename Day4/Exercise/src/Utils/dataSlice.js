import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name : "data",
    initialState : [],
    reducers : {
        addData : (state, action) => {
            state.push(action.payload)
        }
    }
})


export default dataSlice.reducer
export const{addData} = dataSlice.actions
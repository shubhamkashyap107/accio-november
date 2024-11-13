import {createSlice} from "@reduxjs/toolkit"



const searchSlice = createSlice({
    name : "search",
    initialState : [],
    reducers : {
        addSearchResult : (state, action) => {
            // console.log(action.payload)

            const{query, meals} = action.payload


            state.push({query, meals})

        }
    }
})



export default searchSlice.reducer
export const{addSearchResult} = searchSlice.actions
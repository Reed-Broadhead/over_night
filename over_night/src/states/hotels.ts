import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import axios from 'axios';


// initial state
type InitialState = {
    
    value: null | object
}

const initialState: InitialState  = {

    value: {"dallas": 2},

}


export const hotelSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        setHotels: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        },

        getHotels: (state) => {
            console.log(state.value)
        }
    }
})


export const {setHotels} = hotelSlice.actions
export default hotelSlice.reducer
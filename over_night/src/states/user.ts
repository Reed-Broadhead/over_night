import { createSlice, PayloadAction} from "@reduxjs/toolkit"

// initial state
type InitialState = {
    
    value: {"username": string, "email": string, "address": string, "orders": Array<any> } | null
}

const initialState: InitialState  = {

    value: null,

}
// slice
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<any>) => {
            state.value = action.payload;
        },
        getUser: (state) => {
            console.log(state.value)
        }
    }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer
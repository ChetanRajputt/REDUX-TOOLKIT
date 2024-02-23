import { createSlice } from "@reduxjs/toolkit";

export const incdecSlice = createSlice({
    name: "incdec",
    // initialState: 70,
    initialState: 0,
    // reducers: {
    //     Inc: (state, action) => {
    //         return state += 1;
    //     },
    //     Dec: (state, action) => {
    //         return state -= 1;
    //     }
    // }

    // for payload i mean pass a value according perform 
     reducers: {
        Inc: (state, action) => {
            return state += action.payload;
        },
        Dec: (state, action) => {
            return state -= action.payload;
        }
    }
})

export const {Inc,Dec}= incdecSlice.actions;
export default incdecSlice.reducer;
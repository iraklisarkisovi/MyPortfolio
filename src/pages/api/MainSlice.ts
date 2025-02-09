import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: false
}

const mainSlice = createSlice({
    name: 'mslice',
    initialState,
    reducers: {
        themeSwitcher: state => {
            state.theme = !state.theme
        }
    }
})

export const { themeSwitcher } = mainSlice.actions;
export const MR = mainSlice.reducer
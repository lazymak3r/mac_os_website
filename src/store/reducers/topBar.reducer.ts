import {createSlice} from '@reduxjs/toolkit'

export interface TopBarState {
}

const initialState: TopBarState = {}

export const topBarSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {},
})

export const {} = topBarSlice.actions;

export default topBarSlice.reducer;

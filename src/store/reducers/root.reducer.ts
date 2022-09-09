import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface RootState {
}

const initialState: RootState = {}

export const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {},
})

export const {} = rootSlice.actions;

export default rootSlice.reducer;

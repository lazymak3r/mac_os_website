import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

export interface LaunchpadState {
    isOpen: boolean
}

const initialState: LaunchpadState = {
    isOpen: false,
}

export const launchpadSlice = createSlice({
    name: 'launchpad',
    initialState,
    reducers: {
        toggleLaunchpad(state: LaunchpadState, action: PayloadAction<boolean>) {
            state.isOpen = action.payload
        }
    },
})

export const {toggleLaunchpad} = launchpadSlice.actions;

export default launchpadSlice.reducer;

import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface WindowState {
    activeTab: {
        id: string | null
    }
}

const initialState: WindowState = {
    activeTab: {
        id: null
    }
}

export const rootSlice = createSlice({
    name: 'window',
    initialState,
    reducers: {
        setActiveTab(state: WindowState, action: PayloadAction<typeof state.activeTab>) {
            state.activeTab = action.payload
        }
    },
})

export const {setActiveTab} = rootSlice.actions;

export default rootSlice.reducer;

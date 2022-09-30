import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {WindowProps} from "../../components/Window/Window";

export interface WindowState {
    activeWindow: WindowProps | null,
    openedWindows: WindowProps[];
}

const initialState: WindowState = {
    activeWindow: {
        id: 1,
        name: 'Finder',
        size: {
            width: 900,
            height: 500,
        }
    },
    openedWindows: []
}

export const rootSlice = createSlice({
    name: 'window',
    initialState,
    reducers: {
        setActiveTab(state: WindowState, action: PayloadAction<typeof state.activeWindow>) {
            state.activeWindow = action.payload
        },
        openWindow(state: WindowState, action: PayloadAction<WindowProps>) {
            state.activeWindow = action.payload;
            const openedWindowIndex = state.openedWindows.findIndex(wind => wind.id === action.payload.id);
            if (openedWindowIndex === -1) {
                state.openedWindows.push(action.payload);
            }
        },
        closeWindow(state: WindowState, action: PayloadAction<{ id: number }>) {
            const openedWindows = state.openedWindows.filter(wind => wind.id !== action.payload.id)
            state.openedWindows = openedWindows;
        }
    },
})

export const {setActiveTab, openWindow} = rootSlice.actions;

export default rootSlice.reducer;

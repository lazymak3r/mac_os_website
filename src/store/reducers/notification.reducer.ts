import {createSlice} from '@reduxjs/toolkit'

export interface WalletState {

}

const initialState: WalletState = {

}

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {

    },
})

export const {} = notificationSlice.actions;

export default notificationSlice.reducer;

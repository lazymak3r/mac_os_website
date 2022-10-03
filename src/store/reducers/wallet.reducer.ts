import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {WindowProps} from "../../components/Window/Window";

export interface WalletState {
    isConnected: boolean,
    isConnectPopupVisible: boolean,
    accounts: string[],
}

const initialState: WalletState = {
    isConnected: false,
    isConnectPopupVisible: false,
    accounts: []
}

export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        toggleIsConnected(state: WalletState, action: PayloadAction<boolean>) {
            state.isConnected = action.payload
        },
        toggleConnectModal(state: WalletState, action: PayloadAction<boolean>) {
            state.isConnectPopupVisible = action.payload
        },
        setWallet(state: WalletState, action: PayloadAction<Partial<WalletState>>) {
            return {...state, ...action.payload}
        }
    },
})

export const {toggleIsConnected, toggleConnectModal, setWallet} = walletSlice.actions;

export default walletSlice.reducer;

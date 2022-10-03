import {createSelector} from "@reduxjs/toolkit";

import {RootState} from "../index";

const selectDomain = (state: RootState) => state.wallet

export const selectedIsConnected = createSelector([selectDomain], (state) => state.isConnected)

export const selectedIsConnectPopupVisible = createSelector([selectDomain], (state) => state.isConnectPopupVisible)


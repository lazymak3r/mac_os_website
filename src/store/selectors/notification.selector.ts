import {createSelector} from "@reduxjs/toolkit";

import {RootState} from "../index";

const selectDomain = (state: RootState) => state.notification

// export const selectedIsConnected = createSelector([selectDomain], (state) => state.isConnected)



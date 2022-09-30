import {createSelector} from "@reduxjs/toolkit";

import {RootState} from "../index";

const selectDomain = (state: RootState) => state.window

export const selectActiveWindow = createSelector([selectDomain], (state) => state.activeWindow)

export const selectOpenedWindows = createSelector([selectDomain], (state) => state.openedWindows)


import {createSelector} from "@reduxjs/toolkit";

import {RootState} from "../index";

const selectDomain = (state: RootState) => state.window

export const selectActiveTabId = createSelector([selectDomain], (state) => state.activeTab.id)


import {createSelector} from "@reduxjs/toolkit";

import {RootState} from "../index";

const selectDomain = (state: RootState) => state.launchpad

export const selectLaunchpadIsOpen = createSelector([selectDomain], (state) => state.isOpen)



import {configureStore} from '@reduxjs/toolkit'

import rootReducer from "./reducers/root.reducer";
import topBarReducer from "./reducers/topBar.reducer";
import windowReducer from "./reducers/window.reducer";
import walletReducer from "./reducers/wallet.reducer";
import notificationReducer from "./reducers/notification.reducer";

export const store = configureStore({
    reducer: {
        root: rootReducer,
        topBar: topBarReducer,
        window: windowReducer,
        wallet: walletReducer,
        notification: notificationReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

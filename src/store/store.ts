import {configureStore} from '@reduxjs/toolkit'
import {cleaningsApi} from "../services/cleaningsApi";
import {setupListeners} from '@reduxjs/toolkit/query'


export const store = configureStore({
    reducer: {
        [cleaningsApi.reducerPath]: cleaningsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cleaningsApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
import { configureStore } from '@reduxjs/toolkit'
import cleaningsSlice from './cleaningsSlice'


export const store = configureStore({
    reducer: {
        cleanings: cleaningsSlice
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
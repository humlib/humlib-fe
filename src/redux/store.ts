import { configureStore } from '@reduxjs/toolkit'
import { useDispatch as useDispatchRtk } from 'react-redux'

import userReducer from './userSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
})

export type Dispatch = typeof store.dispatch
export const useDispatch = () => useDispatchRtk<Dispatch>()

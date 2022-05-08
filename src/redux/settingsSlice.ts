import { createSlice } from '@reduxjs/toolkit'

export const settingsSlice = createSlice({
    name: 'profile',
    initialState: {
        darkMode: false,
    },
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode
        },
    },
})

// TODO typisierung state
export const selectDarkMode = (state: any) => state.sound.darkMode

export default settingsSlice.reducer

export const { toggleDarkMode } = settingsSlice.actions

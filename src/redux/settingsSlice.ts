import { createSlice } from '@reduxjs/toolkit'

interface SettingsState {
    settings: {
        darkMode: Boolean
    }
}

export const settingsSlice = createSlice({
    name: 'settings',
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
export const selectDarkMode = (state: any) => state.settings.darkMode

export default settingsSlice.reducer

export const { toggleDarkMode } = settingsSlice.actions

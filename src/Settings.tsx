import type { ReactElement } from 'react'
import React, { useContext } from 'react'
import Toggle from './components/Toggle'
import AppContext from './AppContext'
import { useSelector } from 'react-redux'
import { toggleDarkMode, selectDarkMode } from './redux/settingsSlice'

const Settings = (): ReactElement => {
    const { dispatch } = useContext(AppContext)
    const darkMode = useSelector(selectDarkMode)
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                background: darkMode ? 'black' : 'white',
                color: darkMode ? 'white' : 'black',
            }}
        >
            <Toggle
                id="toggle-dark-mode"
                onToggle={() => {
                    dispatch(toggleDarkMode())
                }}
            >
                toggle dark mode
            </Toggle>
            Settings Screen
        </div>
    )
}

export default Settings

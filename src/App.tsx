import type { ReactElement } from 'react'
import React, { useContext } from 'react'

import AppContext from './AppContext'
import { useDispatch } from 'react-redux'

import Settings from './Settings'

function App(): ReactElement {
    const dispatch = useDispatch()
    return (
        <AppContext.Provider value={{ dispatch }}>
            <Settings />
        </AppContext.Provider>
    )
}

export default App

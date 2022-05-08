import type { ReactElement } from 'react'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import React, { useContext } from 'react'
import keycloak from './keycloak'

import Profile from './Profile'
import AppContext from './AppContext'
import { useDispatch } from 'react-redux'

import Settings from './Settings'

function App(): ReactElement {
    const dispatch = useDispatch()
    return (
        // <ReactKeycloakProvider
        //     authClient={keycloak}
        //     initOptions={{ pkceMethod: 'S256', onLoad: 'check-sso' }}
        // >
        //     <Profile />
        // </ReactKeycloakProvider>
        <AppContext.Provider value={{ dispatch }}>
            <Settings />
        </AppContext.Provider>
    )
}

export default App

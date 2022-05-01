import type { ReactElement } from 'react'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import React from 'react'
import keycloak from './keycloak'

import Profile from './Profile'

function App(): ReactElement {
    return (
        <ReactKeycloakProvider
            authClient={keycloak}
            initOptions={{ pkceMethod: 'S256', onLoad: 'check-sso' }}
        >
            <Profile />
        </ReactKeycloakProvider>
    )
}

export default App
